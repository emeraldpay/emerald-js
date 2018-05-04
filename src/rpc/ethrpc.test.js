// @flow
import JsonRpc, { Transport } from './jsonrpc';
import EthRpc from './ethrpc';

class FakeTransport implements Transport {
  request(req) {
    return Promise.resolve(req);
  }
}



describe('EthApi', () => {
  test('estimateGas should convert numbers to hex', () => {
    let args;

    const ethRpc = new EthRpc({
      call(method: string, params: any) {
        args = params;
        return Promise.resolve(0);
      }
    });

    return ethRpc.eth.estimateGas({ nonce: 0, gas: 3000 })
      .then(result => expect(args).toEqual([{ nonce: '0x0', gas: '0xbb8' }]));
  });
});

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
      ]));
  });

  test('ExtApi.batchCall should bind results by id', () => {
    const ethRpc = new EthRpc(new JsonRpc(new FakeTransport()));
    const batch = [
      { id: 'id1', to: '1', data: '1' },
      { id: 'id2', to: '2', data: '2' },
    ];

    return ethRpc.ext.batchCall(batch).then((results) => {
      return expect(results).toEqual({
        id1: { jsonrpc: '2.0', method: 'eth_call', params: [{ to: '1', data: '1' }, 'latest'], id: 1 },
        id2: { jsonrpc: '2.0', method: 'eth_call', params: [{ to: '2', data: '2' }, 'latest'], id: 2 },
      });
    });
  });

  test('EthApi.getBlock converts block attributes', () => {
    const transport = {
      request: () => Promise.resolve({
        jsonrpc: '2.0',
        id: 1,
        result: {
          difficulty: '0x4ea3f27bc',
          extraData: '0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32',
          gasLimit: '0x1388',
          gasUsed: '0x0',
          hash: '0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae',
          logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          miner: '0xbb7b8287f3f0a933474a79eae42cbca977791171',
          mixHash: '0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843',
          nonce: '0x689056015818adbe',
          number: '0x1b4',
          parentHash: '0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54',
          receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
          sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
          size: '0x220',
          stateRoot: '0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d',
          timestamp: '0x55ba467c',
          totalDifficulty: '0x78ed983323d',
          transactions: [],
          transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
          uncles: [],
        },
      }),
    };
    const ethRpc = new EthRpc(new JsonRpc(transport));
    expect.assertions(5);
    return ethRpc.eth.getBlock('0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae')
      .then((b) => {
        expect(b.gasUsed).toEqual(0);
        expect(b.gasLimit).toEqual(5000);
        expect(b.number).toEqual(436);
        expect(b.timestamp).toEqual(1438271100);
        expect(b.size).toEqual(544);
      });
  });
});
