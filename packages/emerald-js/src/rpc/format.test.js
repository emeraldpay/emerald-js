import BigNumber from 'bignumber.js';
import format from './format';

const {
  toHex,
} = format;


describe('toHex', () => {
  it('convert decimal number to hex', () => {
    expect(toHex(10000000000)).toEqual('0x2540be400');
    expect(toHex('21000')).toEqual('0x5208');
    expect(toHex(436)).toEqual('0x1b4');
    expect(toHex(0)).toEqual('0x0');
  });

  it('convert BigNumber to hex', () => {
    expect(toHex(new BigNumber(21000))).toEqual('0x5208');
  });

  it('convert hex to hex', () => {
    expect(toHex('0x01')).toEqual('0x1');
  });
});

describe('format', () => {
  it('convert transaction data from json response', () => {
    const txResponse = {
      gas: '0x7a120',
      nonce: '0x1',
      transactionIndex: '0x1',
    };

    const formatted = format.transaction(txResponse);

    expect(formatted.gas).toEqual(500000);
  });

  it('convert null to null', () => {
    expect(format.transaction(null)).toBeNull();
  });
});
