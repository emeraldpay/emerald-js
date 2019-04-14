/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {Transport, JsonRpcRequest, JsonRpcResponse, JsonRpc, AbstractJsonRpc} from './JsonRpc';
import {Batch, DefaultBatch, JoinedBatch, RawBatchResponse, UnresolvableBatch} from './Batch';

/**
 * Batch verifier
 */
export interface Verifier {
  setup(batch: Batch);
  verify(): Promise<boolean>;
}

/**
 * JsonRpc which verifies each batch result before resolving. If any of verification elements gets invalid, it rejects
 * whole batch.
 *
 * Use [[Verifier]] for verification
 */
export default class VerifyingJsonRpc extends AbstractJsonRpc implements JsonRpc {
  delegate: JsonRpc;
  verifiers: Array<Verifier>;

  constructor(delegate: JsonRpc) {
    super();
    this.delegate = delegate;
    this.verifiers = [];
  }

  verifyWith(verifier: Verifier) {
    this.verifiers.push(verifier);
  }

  execute(batch: Batch): Promise<RawBatchResponse> {
    let verify = new DefaultBatch();
    this.verifiers.forEach((v) => v.setup(verify));
    let bothBatches = new UnresolvableBatch(new JoinedBatch(batch, verify));
    return new Promise<RawBatchResponse>((resolve, reject) => {
      this.delegate.execute(bothBatches).then((raw) => {
        verify.resolve();
        Promise
          .all(this.verifiers.map((x) => x.verify()))
          .then((results) => {
            if (results.every((v) => v)) {
              batch.resolve();
              resolve(new RawBatchResponse(raw.results, batch));
            } else {
              const err = new Error('Batch validation failed');
              batch.getItems().forEach((i) => i.response = null);
              batch.reject(err);
              reject(err);
            }
          })
          .catch((err) => {
            batch.reject(err);
            reject(err);
          });
      }).catch(reject);
    });
  }
}
