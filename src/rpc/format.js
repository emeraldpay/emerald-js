// @flow
import BigNumber from 'bignumber.js';

/**
 * Encodes as hex, prefix with "0x", the most compact representation
 * (slight exception: zero should be represented as "0x0")
 */
function toHex(val: number | string | BigNumber): string {
  const hex = new BigNumber(val).toString(16);
  return `0x${hex}`;
}

function isPredefinedBlockNumber(blockNumber): boolean {
  return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
}

export default {
  toHex,
  isPredefinedBlockNumber,
};
