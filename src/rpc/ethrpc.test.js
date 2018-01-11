// @flow
import JsonRpc, { Transport } from './jsonrpc';
import EthRpc from './ethrpc';

class FakeTransport implements Transport {
  request(req) {
    return Promise.resolve(req);
  }
}

describe('ExtApi', () => {
  const ethRpc = new EthRpc(new JsonRpc(new FakeTransport()));

  test('ExtApi.getTransactions method sends batch request', () => ethRpc.ext.getTransactions(['0xA1', '0xA2', '0xA3'])
    .then(result => expect(result).toEqual([
      {
        jsonrpc: '2.0', method: 'eth_getTransactionByHash', params: ['0xA1'], id: 1,
      },
      {
        jsonrpc: '2.0', method: 'eth_getTransactionByHash', params: ['0xA2'], id: 2,
      },
      {
        jsonrpc: '2.0', method: 'eth_getTransactionByHash', params: ['0xA3'], id: 3,
      },
    ])));
});
