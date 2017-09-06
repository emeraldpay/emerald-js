// @flow
import BigNumber from 'bignumber.js';

/**
 * Convert hex string to number
 *
 * @param value
 * @returns {number}
 */
function toNumber(value: string): number {
  if (value === null) {
    return 0;
  }
  if (typeof value !== 'string') {
    throw new Error(`Invalid argument type ${typeof value}`);
  }
  if (value === '0x') {
    return 0;
  }
  return parseInt(value.substring(2), 16);
}

function separateThousands(value: number, separator: string): string {
  return value.toLocaleString('en').split(',').join(separator);
}

function toHex(val: number | string | BigNumber): string {
  const hex = new BigNumber(val).toString(16);
  return `0x${(hex.length % 2 !== 0 ? `0${hex}` : hex)}`;
}

function hexToBigNumber(val: string, defaultValue: BigNumber): BigNumber {
  if (val === null || val === '0x') {
    return defaultValue;
  }
  return new BigNumber(val, 16);
}

export default {
  toNumber,
  separateThousands,
  toHex,
  hexToBigNumber,
};
