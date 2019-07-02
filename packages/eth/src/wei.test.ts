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
import Wei, {Units} from './wei';
import BigNumber from "bignumber.js";

test('construct from Wei', () => {
  expect(new Wei(123456789).value.toString()).toBe('123456789');
  expect(new Wei(123456789, Units.WEI).value.toString()).toBe('123456789');
});

test('constructor accept negative values', () => {
  expect(new Wei(-1).value.toString()).toBe('-1');
  expect(new Wei("-0.123456789123456789123", Units.ETHER).value.toString()).toBe('-123456789123456789');
});

test('constructor ignores sub-wei values', () => {
  // expect(new Wei(0.123456789).value.toString()).toBe('0');
  expect(new Wei("0.123456789123456789123", Units.ETHER).value.toString()).toBe('123456789123456789');
  expect(new Wei("0.000000000000000000123", Units.ETHER).value.toString()).toBe('0');
  expect(new Wei("0.123", Units.WEI).value.toString()).toBe('0');
  expect(new Wei("-0.123", Units.WEI).value.toString()).toBe('0');
  expect(new Wei("0.567", Units.WEI).value.toString()).toBe('1');
  expect(new Wei("-0.567", Units.WEI).value.toString()).toBe('-1');
});

test('construct from Ether', () => {
  expect(new Wei(0.123456789, Units.ETHER).value.toString()).toBe('123456789000000000');
  expect(new Wei(123456, Units.ETHER).value.toString()).toBe('123456000000000000000000');
});

test("find unit Ether", () => {
  expect(new Wei(1, Units.ETHER).getUnit()).toBe(Units.ETHER);
  expect(new Wei(0, Units.ETHER).getUnit()).toBe(Units.ETHER);
  expect(new Wei(0, Units.WEI).getUnit()).toBe(Units.ETHER);
  expect(new Wei(123456, Units.ETHER).getUnit()).toBe(Units.ETHER);
  expect(new Wei(0.1, Units.ETHER).getUnit(1)).toBe(Units.ETHER);
  expect(new Wei(0.1, Units.ETHER).getUnit(2)).toBe(Units.ETHER);
  expect(new Wei(0.25, Units.ETHER).getUnit(2)).toBe(Units.ETHER);
});

test("find unit Milliether", () => {
  expect(new Wei(0.1, Units.ETHER).getUnit()).toBe(Units.MILLI);
  expect(new Wei(0.05, Units.ETHER).getUnit()).toBe(Units.MILLI);
  expect(new Wei(0.009, Units.ETHER).getUnit()).toBe(Units.MILLI);
});

test("find unit Wei", () => {
  expect(new Wei(25, Units.WEI).getUnit()).toBe(Units.WEI);
  expect(new Wei(1, Units.WEI).getUnit()).toBe(Units.WEI);
});


test("toEther", () => {
  expect(new Wei(10, Units.ETHER).toEther()).toBe('10');
  expect(new Wei(10, Units.ETHER).toEther(null, true)).toBe('10.00000');
  expect(new Wei(10.125, Units.ETHER).toEther()).toBe('10.125');
  expect(new Wei(10.125, Units.ETHER).toEther(null, true)).toBe('10.12500');
  expect(new Wei(10.1234567, Units.ETHER).toEther()).toBe('10.123');
  expect(new Wei(10.1234567, Units.ETHER).toEther(null, true)).toBe('10.12346');
  expect(new Wei(10.1234567, Units.ETHER).toEther(2, true)).toBe('10.12');
  expect(new Wei(10.1234567, Units.ETHER).toEther(null, false)).toBe('10.12346');
  expect(new Wei(10.1234567, Units.ETHER).toEther(2, false)).toBe('10.12');
  expect(new Wei(10.1200051, Units.ETHER).toEther(4, false)).toBe('10.12');
  expect(new Wei(10.1200051, Units.ETHER).toEther(4, true)).toBe('10.1200');
});

test.each([true, false])("toEther fixed=%s", (fixed) => {
  expect(new Wei("0.12778876400805407339", Units.ETHER).toEther(2, fixed)).toBe('0.13');
  expect(new Wei("0.12478876400805407339", Units.ETHER).toEther(2, fixed)).toBe('0.12');
  expect(new Wei("0.12778876400805407339", Units.ETHER).toEther(3, fixed)).toBe('0.128');
  expect(new Wei("0.12738876400805407339", Units.ETHER).toEther(3, fixed)).toBe('0.127');
  expect(new Wei("0.12778876400805407339", Units.ETHER).toEther(4, fixed)).toBe('0.1278');
  expect(new Wei("0.12772876400805407339", Units.ETHER).toEther(4, fixed)).toBe('0.1277');
  expect(new Wei("0.12778876400805407339", Units.ETHER).toEther(5, fixed)).toBe('0.12779');
  expect(new Wei("0.12778176400805407339", Units.ETHER).toEther(5, fixed)).toBe('0.12778');
  expect(new Wei("0.12778876400805407339", Units.ETHER).toEther(6, fixed)).toBe('0.127789');
  expect(new Wei("0.12778806400805407339", Units.ETHER).toEther(6, fixed)).toBe('0.127788');
});

test("toWei", () => {
  expect(new Wei(10.125, Units.ETHER).toWei().toString()).toBe('10125000000000000000');
});

test("toHex", () => {
  expect(new Wei(10.125, Units.ETHER).toHex()).toBe('0x8c8339dafed48000');
  expect(new Wei(1, Units.WEI).toHex()).toBe('0x1');
  expect(new Wei(16, Units.WEI).toHex()).toBe('0x10');
  expect(new Wei(-16, Units.WEI).toHex()).toBe('-0x10');
});


test('toString returns string', () => {
  const v = new Wei(1000010000000000000).toString();
  expect(typeof v).toEqual('string');
});

test('toString uses 3 decimals as default', () => {
  expect(new Wei(1001000000000000000).toString()).toEqual('1.001');
});

test('toString convert to Milli', () => {
  expect(new Wei(1000010000000000000).toString(Units.MILLI)).toEqual('1000.01');
  expect(new Wei(1000010000000000000).toString(Units.MILLI, 5, false, true)).toEqual('1000.01000');
});

test('toString trims zero', () => {
  expect(new Wei(1000010000000000000).toString(Units.MILLI, 3)).toEqual('1000.01');
  expect(new Wei(-1000010000000000000).toString(Units.MILLI, 3)).toEqual('-1000.01');
});

test('toString respects decimals (selected)', () => {
  expect(new Wei("0.12778806400805407339", Units.ETHER).toString(Units.MILLI, 3)).toEqual('127.788');
  expect(new Wei("0.12778806400805407339", Units.ETHER).toString(Units.MILLI, 3, false)).toEqual('127.788');
  expect(new Wei("0.12778806400805407339", Units.ETHER).toString(Units.MILLI, 3, true)).toEqual('127.788 Milliether');
  expect(new Wei("12.7", Units.ETHER).toString(Units.ETHER, 3)).toEqual('12.7');
  expect(new Wei("12.70", Units.ETHER).toString(Units.ETHER, 3)).toEqual('12.7');
  expect(new Wei("12.75", Units.ETHER).toString(Units.ETHER, 3)).toEqual('12.75');
});

test.each([
  [4, false, false, "1.277"],
  [4, false, true, "1.2770"],
  [4, true, false, "1.277 Ether"],
  [4, true, true, "1.2770 Ether"],
])('toString respects decimals dec=%i, unit=%s, fixed=%s', (d, u, f, expected) => {
  // @ts-ignore
  expect(new Wei("1.27700064008", Units.ETHER).toString(Units.ETHER, d, u, f)).toEqual(expected);
});

test.each([
  [4, false, false, "12"],
  [4, false, true, "12.0000"],
  [4, true, false, "12 Ether"],
  [4, true, true, "12.0000 Ether"],
])('toString for positive integer dec=%i, unit=%s, fixed=%s', (d, u, f, expected) => {
  // @ts-ignore
  expect(new Wei("12", Units.ETHER).toString(Units.ETHER, d, u, f)).toEqual(expected);
});

test.each([
  [4, false, false, "-12"],
  [4, false, true, "-12.0000"],
  [4, true, false, "-12 Ether"],
  [4, true, true, "-12.0000 Ether"],
])('toString for negative integer dec=%i, unit=%s, fixed=%s', (d, u, f, expected) => {
  // @ts-ignore
  expect(new Wei("-12", Units.ETHER).toString(Units.ETHER, d, u, f)).toEqual(expected);
});

test('toString shows unit', () => {
  expect(new Wei(1000010000000000000).toString(Units.MILLI, 3, true)).toEqual('1000.01 Milliether');
});

test('toExchange() default rate is 0', () => {
  expect(new Wei(1000010000000000000).toExchange()).toEqual('0.00');
});

test('toExchange() when rate has more than 15 s.d.', () => {
  expect(new Wei(100000000000000000).toExchange(114.12768558799999)).toEqual('11.41');
});

test('equals() compares values', () => {
  expect(new Wei(1).equals(new Wei(1))).toBeTruthy();
  expect(new Wei(0).equals(Wei.ZERO)).toBeTruthy();
});

test('sub', () => {
  expect(new Wei(5).sub(new Wei(1)).value.toFixed()).toEqual("4");
  expect(new Wei(5).sub(new Wei(6)).value.toFixed()).toEqual("-1");
});

test('plus', () => {
  expect(new Wei(5).plus(new Wei(1)).value.toFixed()).toEqual("6");
  expect(new Wei(5).plus(new Wei(-6)).value.toFixed()).toEqual("-1");
  expect(new Wei(-5).plus(new Wei(6)).value.toFixed()).toEqual("1");
});

test('mul', () => {
  expect(new Wei(5).mul(2).value.toFixed()).toEqual("10");
  expect(new Wei(5).mul(-2).value.toFixed()).toEqual("-10");
});

test('mul bignum', () => {
  expect(new Wei(5).mul(new BigNumber(2)).value.toFixed()).toEqual("10");
  expect(new Wei(5).mul(new BigNumber(-2)).value.toFixed()).toEqual("-10");
});

test("math operations", () => {
  expect(
    new Wei("5", Units.ETHER)
      .mul(2)
      .divide(4)
      .minus(new Wei(1, Units.ETHER))
      .plus(new Wei(0.25, Units.ETHER))
      .toString()
  ).toBe('1.75');
});

test("comparison", () => {
  expect(new Wei(1, Units.ETHER).isGreaterThan(new Wei(0.99, Units.ETHER))).toBeTruthy();
  expect(new Wei(1, Units.ETHER).isGreaterThan(new Wei(1.01, Units.ETHER))).toBeFalsy();
  expect(new Wei(1, Units.ETHER).isGreaterThan(new Wei(1, Units.ETHER))).toBeFalsy();
  expect(new Wei(1, Units.ETHER).isGreaterThanOrEqualTo(new Wei(1, Units.ETHER))).toBeTruthy();
  expect(new Wei(1, Units.ETHER).isGreaterThanOrEqualTo(new Wei(1.01, Units.ETHER))).toBeFalsy();
  expect(new Wei(1, Units.ETHER).isGreaterThanOrEqualTo(new Wei(0.99, Units.ETHER))).toBeTruthy();

  expect(new Wei(1, Units.ETHER).isLessThan(new Wei(0.99, Units.ETHER))).toBeFalsy();
  expect(new Wei(1, Units.ETHER).isLessThan(new Wei(1.01, Units.ETHER))).toBeTruthy();
  expect(new Wei(1, Units.ETHER).isLessThan(new Wei(1, Units.ETHER))).toBeFalsy();
  expect(new Wei(1, Units.ETHER).isLessThanOrEqualTo(new Wei(0.99, Units.ETHER))).toBeFalsy();
  expect(new Wei(1, Units.ETHER).isLessThanOrEqualTo(new Wei(1.01, Units.ETHER))).toBeTruthy();
  expect(new Wei(1, Units.ETHER).isLessThanOrEqualTo(new Wei(1.00, Units.ETHER))).toBeTruthy();

  expect(new Wei(1, Units.ETHER).compareTo(new Wei(0.99, Units.ETHER))).toBe(1);
  expect(new Wei(1, Units.ETHER).compareTo(new Wei(1.01, Units.ETHER))).toBe(-1);
  expect(new Wei(1, Units.ETHER).compareTo(new Wei(1, Units.ETHER))).toBe(0);
});

test("checks", () => {
  expect(new Wei(1, Units.ETHER).isPositive()).toBeTruthy();
  expect(new Wei(1, Units.ETHER).isNegative()).toBeFalsy();
  expect(new Wei(1, Units.ETHER).isZero()).toBeFalsy();

  expect(new Wei(-1, Units.ETHER).isPositive()).toBeFalsy();
  expect(new Wei(-1, Units.ETHER).isNegative()).toBeTruthy();
  expect(new Wei(-1, Units.ETHER).isZero()).toBeFalsy();

  expect(new Wei(0, Units.ETHER).isPositive()).toBeFalsy();
  expect(new Wei(0, Units.ETHER).isNegative()).toBeFalsy();
  expect(new Wei(0, Units.ETHER).isZero()).toBeTruthy();
});