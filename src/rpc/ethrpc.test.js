// @flow
import JsonRpc, { Transport } from './jsonrpc';
import EthRpc from './ethrpc';

class FakeTransport implements Transport {
  request(req) {
    return Promise.resolve(req);
  }
}

describe('ExtApi', () => {

  test('ExtApi.getTransactions method sends batch request', () => {
      const ethRpc = new EthRpc(new JsonRpc(new FakeTransport()));

      return ethRpc.ext.getTransactions(['0xA1', '0xA2', '0xA3'])
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
    ]))});

    test('ExtApi.batchCall should bind results by id', () => {
        const ethRpc = new EthRpc(new JsonRpc(new FakeTransport()));
        const batch = [
            {id: "id1", to: "1", data: "1"},
            {id: "id2", to: "2", data: "2"},
        ];

        return ethRpc.ext.batchCall(batch).then((results) => {
            return expect(results).toEqual({
                "id1": {jsonrpc: '2.0', method: 'eth_call', params: [{to: "1", data: "1"}, "latest"], id: 1},
                "id2": {jsonrpc: '2.0', method: 'eth_call', params: [{to: "2", data: "2"}, "latest"], id: 2},
            })
        })
    });
});
