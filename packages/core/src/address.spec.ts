import {EthAddress} from './address';

describe('EthAddress', () => {
  test('41-character alphanumeric hash preceded by 0x is valid', () => {
    expect(new EthAddress('0x6ebeb2af2e734fbba2b58c5b922628af442527ce').isValid()).toBeTruthy();
    expect(new EthAddress('0x0E7C045110B8dbF29765047380898919C5CB56F4').isValid()).toBeTruthy();
  });

  test('long hashes are not valid', () => {
    expect(new EthAddress('0x6ebeb2af2e734fbba2b58c5b922628af442527cefa').isValid()).toBeFalsy();
    expect(new EthAddress('0x0E7C045110B8dbF29765047380898919C5CB56F4C2').isValid()).toBeFalsy();
  });

  test('short hashes are not valid', () => {
    expect(new EthAddress('0x6ebeb2af2e734fbba2b58c5b922628af442527').isValid()).toBeFalsy();
  });

  test('hashes not preceded by 0x are not valid', () => {
    expect(new EthAddress('0E7C045110B8dbF29765047380898919C5CB56F4').isValid()).toBeFalsy();
  });

  test('empty hashes are not valid', () => {
    expect(new EthAddress('').isValid()).toBeFalsy();
  });
});
