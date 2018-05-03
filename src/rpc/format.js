// @flow
import BigNumber from 'bignumber.js';
import convert from '../convert';

/**
 * Encodes as hex, prefix with "0x", the most compact representation
 * (slight exception: zero should be represented as "0x0")
 */
function toHex(val: number | string | BigNumber): string {
  const hex = new BigNumber(val).toString(16);
  return `0x${hex}`;
}

function isPredefinedBlockNumber(blockNumber: number | string): boolean {
  return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
}

function block(b: any) {
  return {
    ...b,
    difficulty: convert.toBigNumber(b.difficulty),
    totalDifficulty: convert.toBigNumber(b.totalDifficulty),
    gasLimit: convert.toNumber(b.gasLimit),
    gasUsed: convert.toNumber(b.gasUsed),
    size: convert.toNumber(b.size),
    timestamp: convert.toNumber(b.timestamp),
    number: convert.toNumber(b.number),
  };
}

function transaction(tx: any) {
  if (!tx) {
    return tx;
  }
  return {
    ...tx,
    blockNumber: tx.blockNumber ? convert.toNumber(tx.blockNumber) : tx.blockNumber,
    nonce: convert.toNumber(tx.nonce),
    value: convert.toBigNumber(tx.value),
    gasPrice: convert.toBigNumber(tx.gasPrice),
    gas: convert.toNumber(tx.gas),
    transactionIndex: convert.toNumber(tx.transactionIndex),
  };
}

function transactionReceipt(receipt: any) {
  return {
    ...receipt,
    blockNumber: convert.toNumber(receipt.blockNumber),
    gasUsed: convert.toNumber(receipt.gasUsed),
    cumulativeGasUsed: convert.toNumber(receipt.cumulativeGasUsed),
    transactionIndex: convert.toNumber(receipt.transactionIndex),
  };
}

export default {
  toHex,
  block,
  transaction,
  transactionReceipt,
  isPredefinedBlockNumber,
};
