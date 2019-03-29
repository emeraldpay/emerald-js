import {DefaultJsonRpc, HttpTransport, JsonRpc, Transport, PredefinedTransport } from '@emeraldplatform/rpc';
import EthRpc from './ethrpc';
import { CallObject } from './types';

class FakeTransport implements Transport {
  request(req: any) {
    return Promise.resolve(req);
  }
}

describe('EthApi', () => {
  test('estimateGas should convert numbers to hex', () => {
    let args: any;

    const ethRpc = new EthRpc({
      call(method: string, params: any) {
        args = params;
        return Promise.resolve(0);
      }
    } as JsonRpc);

    return ethRpc.eth.estimateGas({ nonce: 0, gas: 3000 } as CallObject)
      .then(result => expect(args).toEqual([{ nonce: '0x0', gas: '0xbb8' }]));
  });
});

describe('ExtApi', () => {
  test('ExtApi.getTransactions method sends batch request', () => {
    const transport = new PredefinedTransport();
    transport.addResponse('eth_getTransactionByHash', ['0xA1'], 'a1');
    transport.addResponse('eth_getTransactionByHash', ['0xA2'], 'a2');
    transport.addResponse('eth_getTransactionByHash', ['0xA3'], 'a3');
    const ethRpc = new EthRpc(new DefaultJsonRpc(transport));

    return ethRpc.ext.getTransactions(['0xA1', '0xA2', '0xA3'])
      .then(result => expect(result).toEqual(['a1', 'a2', 'a3']));
  });

  test('ExtApi.batchCall should bind results by id', () => {
    const transport = new PredefinedTransport();
    transport.addResponse('eth_call', [{ to: '1', data: '1' }, 'latest'], 'call1');
    transport.addResponse('eth_call', [{ to: '2', data: '2' }, 'latest'], 'call2');
    transport.addResponse('eth_getTransactionByHash', ['0xA2'], 'a2');

    const ethRpc = new EthRpc(new DefaultJsonRpc(transport));
    const batch = [
      { id: 'id1', to: '1', data: '1' },
      { id: 'id2', to: '2', data: '2' },
    ];

    return ethRpc.ext.batchCall(batch).then((results) => {
      return expect(results).toEqual(['call1', 'call2']);
    });
  });

  test('EthApi.getBlock converts block attributes', () => {
    const transport = {
      request: (_) => Promise.resolve([{
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
      }]),
    } as HttpTransport;
    const ethRpc = new EthRpc(new DefaultJsonRpc(transport));
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
