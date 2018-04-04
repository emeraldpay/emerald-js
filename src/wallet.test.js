import Wallet from './wallet';

test('fromPrivateKey', () => {
  expect(() => Wallet.fromPrivateKey('0x12')).toThrowError();
});

test('getAddress() returns address as hex string', () => {
  const wallet = Wallet.fromPrivateKey('0x09b055edb6b45e461d55f50bc5590e69ba6c480b47254afe8884b236c706a2e6');
  expect(wallet.getAddress()).toEqual('0x5b06c264bf2cd877a2b85d03d720674566231fa0');
});
