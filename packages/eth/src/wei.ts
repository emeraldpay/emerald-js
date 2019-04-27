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
import convert from './convert';

export type Unit = {
  name: string,
  weis: BigNumber
}

export const Units = {
  ETHER: {name: 'Ether', weis: new BigNumber(10).pow(18)} as Unit,
  MILLI: {name: 'Milliether', weis: new BigNumber(10).pow(15)} as Unit,
  MICRO: {name: 'Microether', weis: new BigNumber(10).pow(12)} as Unit,
  GWEI: {name: 'Gwei', weis: new BigNumber(10).pow(9)} as Unit,
  MWEI: {name: 'Mwei', weis: new BigNumber(10).pow(6)} as Unit,
  KWEI: {name: 'Kwei', weis: new BigNumber(10).pow(3)} as Unit,
  WEI: {name: 'Wei', weis: new BigNumber(10).pow(0)} as Unit,
};

const ALL_UNITS: Unit[] = [
  Units.ETHER,
  Units.MILLI,
  Units.MICRO,
  Units.GWEI,
  Units.MWEI,
  Units.KWEI,
  Units.WEI,
];

const ZERO_NUM = new BigNumber(0);

BigNumber.config({ EXPONENTIAL_AT: 30 });

/**
 * Immutable Wei value
 */
export default class Wei {
  value: BigNumber;

  static ZERO: Wei = new Wei(0);

  constructor(val: number | string | BigNumber, unit: Unit = Units.WEI) {
    let value = convert.toBigNumber(val);
    if (unit === Units.WEI) {
      if (value.isLessThan(1)) {
        value = ZERO_NUM;
      }
    } else {
      value = value.multipliedBy(unit.weis).decimalPlaces(0, BigNumber.ROUND_DOWN);
    }
    this.value = value;
  }

  mul(another: number | BigNumber): Wei {
    if (typeof another === 'number') {
      another = new BigNumber(another);
    }
    return new Wei(this.value.multipliedBy(another));
  }

  divide(another: number | BigNumber): Wei {
    if (typeof another === 'number') {
      another = new BigNumber(another);
    }
    return new Wei(this.value.dividedToIntegerBy(another));
  }

  plus(another: Wei): Wei {
    return new Wei(this.value.plus(another.value));
  }

  sub(another: Wei): Wei {
    return new Wei(this.value.minus(another.value));
  }

  minus(another: Wei): Wei {
    return this.sub(another);
  }

  getUnit(digits: number = 0, accepted: Unit[] = ALL_UNITS): Unit {
    if (this.value.isEqualTo(ZERO_NUM)) {
      return Units.ETHER;
    }
    const del = new BigNumber(10).pow(digits);
    let unit = accepted.find( (u) => this.value.isGreaterThanOrEqualTo(u.weis.dividedBy(del)));
    return unit ? unit : Units.WEI;
  }

  /**
   * @deprecated
   * @param decimals
   */
  getEther(decimals: number | null = 3): string {
    return this.toEther(decimals);
  }

  toEther(decimals: number | null = 3, fixed: boolean = false): string {
    if (typeof decimals === 'undefined' || decimals == null) {
      decimals = 5
    }
    let bn = this.toUnit(Units.ETHER);
    if (fixed) {
      return bn.toFixed(decimals);
    }
    return bn.toString();
  }

  toWei(): BigNumber {
    return this.toUnit(Units.WEI);
  }

  toHex(): string {
    return '0x' + this.value.toString(16);
  }

  toUnit(unit: Unit): BigNumber {
    if (unit === Units.WEI) {
      return this.value;
    }
    return this.value.dividedBy(unit.weis);
  }

  toString(unit: Unit = Units.ETHER, decimals: number = 3, showUnit: boolean = false, fixed: boolean = false): string {
    let bn = this.toUnit(unit);
    const num: string = fixed ? bn.toFixed(decimals, BigNumber.ROUND_HALF_UP) : bn.toString();
    if (showUnit) {
      return num + ' ' + unit.name;
    }
    return num;
  }

  /**
   * @deprecated
   * @param r
   * @param decimals
   */
  getFiat(r?: number | null, decimals: number = 2): string {
    const rate = (r === null || typeof r === 'undefined') ?
      ZERO_NUM :
      new BigNumber(r.toString());
    return this.toExchange(rate, decimals);
  }

  toExchange(rate: number | BigNumber = 0, decimals: number = 2): string {
    return this.toUnit(Units.ETHER).multipliedBy(rate).toFixed(decimals);
  }

  equals(another: Wei): boolean {
    return this.value.isEqualTo(another.value);
  }
}
