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
              resolve(raw);
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
      });
    });
  }
}
