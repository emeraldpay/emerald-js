import NodeChecker from './NodeChecker';
import {DefaultJsonRpc, PredefinedTransport} from '@emeraldplatform/rpc';
import { EthRpc } from '@emeraldplatform/eth-rpc';

test('check() return unknown chain', () => {
  const transport = new PredefinedTransport();
  transport.addResponse("eth_getBlockByNumber", ['0x1d4c00', false],
    {hash: "0x090e3063138d113f0e90dc2046ec6502401943bf7a664327cfcd0424360892e7"});
  transport.addResponse("eth_getBlockByNumber", ['0x00', false],
    {hash: "0x3f0e90dc2046ec63138d1124360892e76502401943bf7a664327cfcd04090e30"});

  const checker = new NodeChecker(new EthRpc(new DefaultJsonRpc(transport)));
  return checker.check().then((result) => {
    expect(result.chain).toBe('unknown');
    expect(result.chainId).toBe(0);
  });
});

test('check() detects Morden Testnet', () => {
  const transport = new PredefinedTransport();
  transport.addResponse("eth_getBlockByNumber", ['0x1d4c00', false],
    null);
  transport.addResponse("eth_getBlockByNumber", ['0x00', false],
    {hash: "0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303"});

  const checker = new NodeChecker(new EthRpc(new DefaultJsonRpc(transport)));
  return checker.check().then((result) => {
    expect(result.chain).toBe('morden');
    expect(result.chainId).toBe(62);
  });
});
