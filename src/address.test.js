import Address from './address';

test('isValid() validates addresses', () => {
  expect(Address.isValid('0x6ebeb2af2e734fbba2b58c5b922628af442527ce')).toBeTruthy();
  expect(Address.isValid('0x0E7C045110B8dbF29765047380898919C5CB56F4')).toBeTruthy();
  expect(Address.isValid('0x6ebeb2af2e734fbba2b58c5b922628af442527')).toBeFalsy();
  expect(Address.isValid('0E7C045110B8dbF29765047380898919C5CB56F4')).toBeFalsy();
  expect(Address.isValid('')).toBeFalsy();
  expect(Address.isValid(null)).toBeFalsy();
  expect(Address.isValid()).toBeFalsy();
});
