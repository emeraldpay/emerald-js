import BigNumber from 'bignumber.js';

export class Units {
  amount: BigNumber;
  decimals: number;

  constructor(amount: BigNumber, decimals: number) {
    this.amount = amount;
    this.decimals = decimals;
  }
};

/**
 * Convert amount to smallest denomination of token or any currency
 * For example, amount 1 ether with 18 decimal places will be converted into 1*10^18 base units
 * (i.e. 1*10^18 wei)
 */
export function toBaseUnits(amount: BigNumber, decimals: number): BigNumber {
  const unit = new BigNumber(10).pow(decimals);
  return amount.times(unit);
}

/**
 * Convert from smallest denomination (base units) to amount of token
 * For example, 1 wei will be converted to 0.000000000000000001 ether
 */
export function fromBaseUnits(amount: BigNumber, decimals: number): BigNumber {
  const unit = new BigNumber(10).pow(decimals);
  return amount.div(unit);
}