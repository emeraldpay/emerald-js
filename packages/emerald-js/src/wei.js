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
// @flow
import BigNumber from 'bignumber.js';
import convert from './convert';

const ETHER = new BigNumber(10).pow(18);
const MWEI = new BigNumber(10).pow(6);
const ZERO = new BigNumber(0);

/**
 * Immutable Wei value
 */
export default class Wei {
  getValue: () => BigNumber;

  static ZERO: Wei = new Wei(0);

  constructor(val: number | string | BigNumber) {
    // private member
    let value: BigNumber = ZERO;
    value = convert.toBigNumber(val);
    if (value.isLessThan(1)) {
      value = ZERO;
    }

    // privileged getter
    this.getValue = () => value;
  }

  value(): BigNumber {
    return this.getValue();
  }

  getEther(decimals: number = 5): string {
    return this.value().dividedBy(ETHER).toFixed(decimals);
  }

  getMwei(): string {
    return this.value().dividedBy(MWEI).toFixed(5);
  }

  mul(another: Wei): Wei {
    return new Wei(this.value().multipliedBy(another.value()));
  }

  plus(another: Wei): Wei {
    return new Wei(this.value().plus(another.value()));
  }

  sub(another: Wei): Wei {
    return new Wei(this.value().minus(another.value()));
  }

  getFiat(r: number, decimals: number = 2): string {
    const rate = (r === null || typeof r === 'undefined') ?
      ZERO :
      new BigNumber(r.toString());
    return this.value().dividedBy(ETHER).multipliedBy(rate).toFixed(decimals);
  }

  equals(another: Wei): Wei {
    return this.value().isEqualTo(another.value());
  }
}
