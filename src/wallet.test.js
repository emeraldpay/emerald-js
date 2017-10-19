import Wallet from './wallet';

test('fromPrivateKey', () => {
  expect(() => Wallet.fromPrivateKey('0x12')).toThrowError();
});
