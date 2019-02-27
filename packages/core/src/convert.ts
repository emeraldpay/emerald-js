import BigNumber from 'bignumber.js';

/**
 * Convert hex string to number
 *
 * @param value
 * @returns {number}
 */
export function toNumber(value: string | number): number {
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
export function toBigNumber(value: string|number|BigNumber, defaultValue: BigNumber = ZERO): BigNumber {
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

