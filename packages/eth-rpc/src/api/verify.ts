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
import { Verifier, Batch } from '@emeraldplatform/rpc';

/**
 * Verifies that target RPC has enough peer
 */
export class VerifyMinPeers implements Verifier {
  min: number;
  response?: Promise<string>;

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
  response?: Promise<string>;

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
  response?: Promise<string>;

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
  responseForDetails?: Promise<string>;
  responseForHeight?: Promise<string>;

  constructor(block: number, hash: string) {
    if (block < 0) {
      throw new Error(`Invalid block number: ${block}`)
    }
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
            if (this.responseForDetails) {
              this.responseForDetails.then((block: any) => {
                resolve(block.hash === this.hash);
              })
            } else {
              resolve(false);
            }
          }
        }).catch((_) => resolve(false));
      }
    });
  }
}
