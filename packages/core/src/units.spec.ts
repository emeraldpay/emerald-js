import BigNumber from 'bignumber.js';
import { fromBaseUnits, toBaseUnits, Units } from './units';

describe('toBaseUnits / fromBaseUnits', () => {
  it('convert to base units', () => {
    expect(toBaseUnits(new BigNumber(1234), 8).toString()).toEqual('123400000000');
    expect(toBaseUnits(new BigNumber('0.01'), 8).toString()).toEqual('1000000');
  });
  it('convert from base units', () => {
    expect(fromBaseUnits(new BigNumber('1000000000000000000'), 18).toString()).toEqual('1');
  });
});

describe('Units', () => {
  it('has constructor', () => {
    const u = new Units(new BigNumber(1), 5);
    expect(u.amount).toEqual(new BigNumber(1));
    expect(u.decimals).toEqual(5);
  })
});