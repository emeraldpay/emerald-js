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
 * Verifies that target RPC has enough peer
 */
export class VerifyMinPeers implements Verifier {
  min: number;
  response: Promise<string>;

  constructor(min: number) {
    if (min < 0) {
      throw new Error('Peers number cannot be less than zero: ' + min)
    }
    this.min = min;
  }

  setup(batch: Batch) {
    this.response = batch.addCall('net_peerCount', []);
  }

  verify(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (typeof this.response == 'undefined') {
        resolve(false);
      } else {
        this.response.then((numStr) => {
          if (typeof numStr == 'string' && numStr.startsWith('0x') && numStr.length > 2) {
            let num = parseInt(numStr.slice(2), 16);
            resolve(num >= this.min);
          } else {
            resolve(false);
          }
        }).catch((_) => resolve(false));
      }
    });
  }
}

/**
 * Verifies that target RPC is not in a fast/warp sync mode
 */
export class VerifyNotSyncing implements Verifier {
  response: Promise<string>;

  constructor() {
  }

  setup(batch: Batch) {
    this.response = batch.addCall('eth_syncing', []);
  }

  verify(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (typeof this.response == 'undefined') {
        resolve(false);
      } else {
        this.response.then((details: any) => {
          if (typeof details == 'boolean') {
            resolve(details == false);
          } else {
            resolve(false);
          }
        }).catch((_) => resolve(false));
      }
    });
  }
}

/**
 * Verifies that target RPC has specified genesis
 */
export class VerifyGenesis implements Verifier {
  hash: string;
  response: Promise<string>;

  constructor(hash: string) {
    this.hash = hash;
  }

  setup(batch: Batch) {
    this.response = batch.addCall('eth_getBlockByNumber', ['0x00', false]);
  }

  verify(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (typeof this.response == 'undefined') {
        resolve(false);
      } else {
        this.response.then((block: any) => {
          resolve(block.hash === this.hash);
        }).catch((_) => resolve(false));
      }
    });
  }
}

/**
 * Verifies that target RPC has specifies hash at the defined height, or not synchronized to that height yet
 */
export class VerifyBlockHash implements Verifier {
  hash: string;
  block: number;
  responseForDetails: Promise<string>;
  responseForHeight: Promise<string>;

  constructor(block: number, hash: string) {
    this.block = block;
    this.hash = hash;
  }

  setup(batch: Batch) {
    this.responseForDetails = batch.addCall('eth_getBlockByNumber', ['0x'+this.block.toString(16), false]);
    this.responseForHeight = batch.addCall('eth_blockNumber', []);
  }

  verify(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (typeof this.responseForDetails == 'undefined' || typeof this.responseForHeight == 'undefined') {
        resolve(false);
      } else {
        this.responseForHeight.then((heightStr: string) => {
          let height = parseInt(heightStr.slice(2), 16);
          if (height < this.block) {
            resolve(true);
          } else {
            this.responseForDetails.then((block: any) => {
              resolve(block.hash === this.hash);
            })
          }
        }).catch((_) => resolve(false));
      }
    });
  }
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

  minPeers(num: number): VerifyingJsonRpc {
     this.verifyWith(new VerifyMinPeers(num));
     return this;
  }

  genesis(hash: string): VerifyingJsonRpc {
    this.verifyWith(new VerifyGenesis(hash));
    return this;
  }

  block(height: number, hash: string): VerifyingJsonRpc {
    this.verifyWith(new VerifyBlockHash(height, hash));
    return this;
  }

  notSyncing() {
    this.verifyWith(new VerifyNotSyncing());
    return this;
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
