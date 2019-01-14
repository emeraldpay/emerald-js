import utils from 'ethereumjs-util';
import EthereumTx from 'ethereumjs-tx';

import Wallet from './wallet';

const { rlp } = utils;

test('fromPrivateKey', () => {
  expect(() => Wallet.fromPrivateKey('0x12')).toThrowError();
});

test('getAddress() returns address as hex string', () => {
  const wallet = Wallet.fromPrivateKey('0x09b055edb6b45e461d55f50bc5590e69ba6c480b47254afe8884b236c706a2e6');
  expect(wallet.getAddress()).toEqual('0x5b06c264bf2cd877a2b85d03d720674566231fa0');
});

describe('Wallet', () => {
  it('should sign tx', () => {
    const wallet = Wallet.fromPrivateKey('0xe331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109');
    const txData = {
      chainId: 1,
      nonce: 0,
      gasPrice: 100,
      gasLimit: 1000,
      value: 0,
      data: '0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820af38ce82c3a099c3efae04c6a69a94c77ed4d313b65cb39426e4bad43298d98a0029',
    };
    const rlpTx = wallet.signTx(txData);
    const decoded = new EthereumTx(rlp.decode(rlpTx));
    expect(decoded.value.toString('hex')).toEqual('');
    expect(decoded.gasLimit.toString('hex')).toEqual('03e8');
    expect(decoded.data.toString('hex')).toEqual(txData.data.substring(2));
  });
});
