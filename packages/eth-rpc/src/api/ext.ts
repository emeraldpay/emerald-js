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
import { JsonRpc } from '@emeraldplatform/rpc';
import format from '../format';
import { DefaultBatch } from "@emeraldplatform/rpc";

/**
 * Extended API
 */
export default class ExtApi {
    rpc: JsonRpc;

    constructor(jsonRpc: JsonRpc) {
      this.rpc = jsonRpc;
    }

    getBlocks(from: number, to: number): Promise<Array<any>> {
      let batch = new DefaultBatch();
      let results: Array<Promise<any>> = [];

      for (let i = from; i <= to; i += 1) {
        results.push(batch.addCall('eth_getBlockByNumber', [format.toHex(i), false]));
      }

      this.rpc.execute(batch).catch(() => {});
      return Promise.all(results)
        .then((data: any) => data.map(format.block));
    }

    getBlocksByNumbers(number: number | string | Array<any>): Promise<Array<any>> {
      let formattedNumber = number;
      if (typeof number === 'number') {
        formattedNumber = format.toHex(number);
      }
      let batch = new DefaultBatch();

      const requests = (formattedNumber as Array<any>).map((blockNumber) =>
        batch.addCall('eth_getBlockByNumber', [blockNumber, false])
      );

      this.rpc.execute(batch).catch(() => {});
      return Promise.all(requests)
        .then((blocks: any) => blocks.map(format.block));
    }

    getBalances(addresses: Array<string>, blockNumber: number | string = 'latest'): Promise<{ [key:string]: any }> {
      const balances: { [key:string]: any } = {};
      let batch = new DefaultBatch();

      const requests = addresses.map(a =>
        batch.addCall('eth_getBalance', [a, blockNumber])
          .then((resp: any) => { balances[a] = resp; })
      );

      this.rpc.execute(batch).catch(() => {});
      return Promise.all(requests)
        .then((_: any) => balances);
    }

    /**
     * Batch request transactions by hashes
     * @param hashes
     * @returns {Promise.<any>}
     */
    getTransactions(hashes: Array<string>): Promise<Array<any>> {
      let batch = new DefaultBatch();

      const requests = hashes.map(h =>
        batch.addCall('eth_getTransactionByHash', [h])
      );

      this.rpc.execute(batch).catch(() => {});
      return Promise.all(requests)
    }

    /**
     * Many calls in one request
     */
    batchCall(calls: Array<{id: string, to: string, data: string}>, blockNumber: number | string = 'latest'): Promise<any> {
      let batch = new DefaultBatch();
      let mapping: any = {};
      calls.forEach((c) => {
        batch.addCall("eth_call", [{to: c.to, data: c.data}, blockNumber])
          .then((data: any) => mapping[c.id] = {result: data})
          .catch((err: any) => mapping[c.id] = {result: null, error: err})
      });
      this.rpc.execute(batch).catch(() => {});
      return Promise.all(batch.getItems().map(it => it.promise ))
        .then(() => mapping);
    }

}
