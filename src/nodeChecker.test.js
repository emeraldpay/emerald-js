/* @flow */
import NodeChecker from './nodeChecker';
import JsonRpc, { Transport } from './rpc/jsonrpc';
import EthRpc from './rpc/ethrpc';

test('check() return unknown chain', () => {
  // Fake transport always resolve to block hash
  const transport: Transport = {
    request: () => Promise.resolve({ id: 3, result: '0x090e3063138d113f0e90dc2046ec6502401943bf7a664327cfcd0424360892e7' }),
  };

  const checker = new NodeChecker(new EthRpc(new JsonRpc(transport)));
  return checker.check().then((result) => {
    expect(result.chain).toBe('unknown');
    expect(result.chainId).toBe(0);
  });
});

test('check() detects Morden Testnet', () => {
  // Fake transport always resolve to block hash
  const transport: Transport = {
    request: () => Promise.resolve({ id: 3, result: { hash: '0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303' } }),
  };

  const checker = new NodeChecker(new EthRpc(new JsonRpc(transport)));
  return checker.check().then((result) => {
    expect(result.chain).toBe('morden');
    expect(result.chainId).toBe(62);
  });
});
