import { JsonRpc } from '@emeraldplatform/rpc';
import format from '../format';

const formatBatchBlockResponse = responses => responses.filter(r => r.result).map(r => format.block(r.result));
/**
 * Extended API
 */
export default class ExtApi {
    rpc: JsonRpc;

    constructor(jsonRpc) {
      this.rpc = jsonRpc;
    }

    getBlocks(from: number, to: number) {
      let requests = [];

      for (let i = from; i <= to; i += 1) {
        requests.push(this.rpc.newBatchRequest('eth_getBlockByNumber', [format.toHex(i), false]));
      }

      return this.rpc.batch(requests).then(formatBatchBlockResponse);
    }

    getBlocksByNumbers(number: number | string | Array<any>) {
      let formattedNumber = number;
      if (typeof number === 'number') {
        formattedNumber = format.toHex(number);
      }

      const requests = (formattedNumber as Array<any>).map(
        (blockNumber) => this.rpc.newBatchRequest('eth_getBlockByNumber', [blockNumber, false])
      )
      return this.rpc.batch(requests).then(formatBatchBlockResponse);
    }

    getBalances(addresses: Array<string>, blockNumber: number | string = 'latest') {
      const balances = {};
      const requests = addresses.map(a =>
        this.rpc.newBatchRequest('eth_getBalance', [a, blockNumber], (resp) => { balances[a] = resp.result; }));

      return this.rpc.batch(requests).then(() => balances);
    }

    /**
     * Batch request transactions by hashes
     * @param hashes
     * @returns {Promise.<any>}
     */
    getTransactions(hashes: Array<string>): Promise<any> {
      const requests = hashes.map(h =>
        this.rpc.newBatchRequest('eth_getTransactionByHash', [h]));
      return this.rpc.batch(requests);
    }

    /**
     * Many calls in one request
     */
    batchCall(calls: Array<{id: string, to: string, data: string}>, blockNumber: number | string = 'latest'): Promise<any> {
      const results = {};
      const responseHandler = id => (resp) => { results[id] = resp; };

      const requests = calls.map(c =>
        this.rpc.newBatchRequest(
          'eth_call',
          [{ to: c.to, data: c.data }, blockNumber],
          responseHandler(c.id),
        ));
      return this.rpc.batch(requests).then(() => results);
    }
}