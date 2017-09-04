import BigNumber from 'bignumber.js';
import convert from './convert';

const { toNumber, separateThousands, toHex } = convert;

test('toNumber should convert hex string to number', () => {
  expect(toNumber('0x01')).toBe(1);
  expect(toNumber('0x')).toBe(0);
  expect(toNumber('0xF')).toBe(15);
});

test('format number with separated thousands', () => {
  expect(separateThousands(123456789, ' ')).toEqual('123 456 789');
  expect(separateThousands(123456789, '*')).toEqual('123*456*789');
});

describe('toHex', () => {
  it('convert decimal number to hex', () => {
    expect(toHex(10000000000)).toEqual('0x02540be400');
    expect(toHex('21000')).toEqual('0x5208');
  });

  it('convert BigNumber to hex', () => {
    expect(toHex(new BigNumber(21000))).toEqual('0x5208');
  });
});
