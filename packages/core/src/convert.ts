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

/**
 * Convert hex string to number
 *
 * @param value
 * @param defaultValue
 * @returns {number}
 */
export function toNumber(value: string | number, defaultValue = 0): number {
  if (!value) {
    return defaultValue;
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

export function quantitiesToHex(val: number | string): string {
  return `0x${new BigNumber(val).toString(16)}`;
}
