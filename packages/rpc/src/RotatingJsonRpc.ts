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
import {AbstractJsonRpc, JsonRpc} from './JsonRpc';
import {Batch, RawBatchResponse, UnresolvableBatch} from "./Batch";

/**
 * JsonRpc wrapper around several underlying JsonRpc deletes. This class executes underlying
 * JsonRpc one by one until it finds one that processed batch without error. If no working JsonRpc
 * was found it fails with last recorder error
 */
export default class RotatingJsonRpc extends AbstractJsonRpc implements JsonRpc {
  delegates: Array<JsonRpc>;

  constructor(...delegates: Array<JsonRpc>) {
    super();
    this.delegates = delegates;
  }

  execute(batch: Batch): Promise<RawBatchResponse> {
    function delegate(n: Array<JsonRpc>, resolve: Function, reject: Function) {
      if (n.length == 0) {
        let err = new Error('No JsonRpc delegates found');
        reject(err);
        batch.reject(err);
        return;
      }
      n[0].execute(new UnresolvableBatch(batch))
        .then((result) => {
          batch.resolve();
          resolve(result);
        })
        .catch((err) => {
          if (n.length > 1) {
            delegate(n.slice(1), resolve, reject);
          } else {
            batch.reject(err);
            reject(err);
          }
        });
    }
    return new Promise<RawBatchResponse>((resolve, reject) => delegate(this.delegates, resolve, reject));
  }

}
