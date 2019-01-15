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
    if (value.lessThan(1)) {
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

  mul(bigNumber: BigNumber): Wei {
    return new Wei(this.value().mul(bigNumber));
  }

  plus(another: Wei): Wei {
    return new Wei(this.value().plus(another.value()));
  }

  sub(another: Wei): Wei {
    return new Wei(this.value().sub(another.value()));
  }

  getFiat(r: number, decimals: number = 2): string {
    const rate = (r === null || typeof r === 'undefined') ?
      ZERO :
      new BigNumber(r.toString());
    return this.value().dividedBy(ETHER).mul(rate).toFixed(decimals);
  }

  equals(another: Wei): Wei {
    return this.value().equals(another.value());
  }
}
