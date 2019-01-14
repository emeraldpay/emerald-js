// @flow
import BigNumber from 'bignumber.js';

/**
 * Convert hex string to number
 *
 * @param value
 * @returns {number}
 */
function toNumber(value: string | number): number {
  if (value === null) {
    return 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  if (typeof value !== 'string') {
    throw new Error(`Invalid argument type ${typeof value}`);
  }
  if (value === '0x') {
    return 0;
  }
  return parseInt(value.substring(2), 16);
}

const ZERO = new BigNumber(0);
/**
 * Converts number, string or hex string into BigNumber
 */
function toBigNumber(value: string|number|BigNumber, defaultValue: BigNumber = ZERO): BigNumber {
  if (!value) {
    return defaultValue;
  }
  if (value instanceof BigNumber) {
    return value;
  }
  if (typeof value === 'string') {
    if (value === '0x') {
      return ZERO;
    }
    if (value.substring(0, 2) === '0x') {
      return new BigNumber(value.substring(2), 16);
    }
  }
  return new BigNumber(value, 10);
}

export function toHex(val: number | string | BigNumber): string {
  const hex = new BigNumber(val).toString(16);
  return `0x${(hex.length % 2 !== 0 ? `0${hex}` : hex)}`;
}


/**
 * Convert amount to smallest denomination of token or any currency
 * For example, amount 1 ether with 18 decimal places will be converted into 1*10^18 base units
 * (i.e. 1*10^18 wei)
 */
function toBaseUnits(amount: BigNumber, decimals: number): BigNumber {
  const unit = new BigNumber(10).pow(decimals);
  return amount.times(unit);
}

/**
 * Convert from smallest denomination (base units) to amount of token
 * For example, 1 wei will be converted to 0.000000000000000001 ether
 */
function fromBaseUnits(amount: BigNumber, decimals: number): BigNumber {
  const unit = new BigNumber(10).pow(decimals);
  return amount.div(unit);
}

export default {
  toNumber,
  toHex,
  toBigNumber,
  toBaseUnits,
  fromBaseUnits,
};
