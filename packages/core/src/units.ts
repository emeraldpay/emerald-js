/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import BigNumber from 'bignumber.js';

export class Units {
  amount: BigNumber;
  decimals: number;

  constructor(amount: BigNumber, decimals: number) {
    this.amount = amount;
    this.decimals = decimals;
  }
}

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