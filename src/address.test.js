import ethUtil from 'ethereumjs-util';
import Address from './address';

describe('isValid() validates addresses', () => {
  test('41-character alphanumeric hash preceded by 0x is valid', () => {
    expect(Address.isValid('0x6ebeb2af2e734fbba2b58c5b922628af442527ce')).toBeTruthy();
    expect(Address.isValid('0x0E7C045110B8dbF29765047380898919C5CB56F4')).toBeTruthy();
  });

  test('long hashes are not valid', () => {
    expect(Address.isValid('0x6ebeb2af2e734fbba2b58c5b922628af442527cefa')).toBeFalsy();
    expect(Address.isValid('0x0E7C045110B8dbF29765047380898919C5CB56F4C2')).toBeFalsy();
  });

  test('short hashes are not valid', () => {
    expect(Address.isValid('0x6ebeb2af2e734fbba2b58c5b922628af442527')).toBeFalsy();
  });

  test('hashes not preceded by 0x are not valid', () => {
    expect(Address.isValid('0E7C045110B8dbF29765047380898919C5CB56F4')).toBeFalsy();
  });

  test('empty hashes are not valid', () => {
    expect(Address.isValid('')).toBeFalsy();
    expect(Address.isValid(null)).toBeFalsy();
    expect(Address.isValid()).toBeFalsy();
  });

  test('validates addresses using ethereumjs-util.isValidAddress', () => {
    const addressParam = '0x6ebeb2af2e734fbba2b58c5b922628af442527ce';
    const isValidSpy = jest.spyOn(Address, 'isValid');
    const ethUtilSpy = jest.spyOn(ethUtil, 'isValidAddress');

    const isValidAddress = Address.isValid(addressParam);

    expect(isValidSpy).toHaveBeenCalled();
    expect(isValidAddress).toBeTruthy();
    expect(ethUtilSpy).toHaveBeenCalledTimes(1);
    expect(ethUtilSpy).toHaveBeenCalledWith(addressParam);

    isValidSpy.mockReset();
    isValidSpy.mockRestore();

    ethUtilSpy.mockReset();
    ethUtilSpy.mockRestore();
  });
});
