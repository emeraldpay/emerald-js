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

test('constructor ignores sub-wei values', () => {
  // expect(new Wei(0.123456789).value.toString()).toBe('0');
  expect(new Wei("0.123456789123456789123", Units.ETHER).value.toString()).toBe('123456789123456789');
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
  expect(new Wei(10.1234567, Units.ETHER).toEther()).toBe('10.1234567');
  expect(new Wei(10.1234567, Units.ETHER).toEther(null, true)).toBe('10.12346');
  expect(new Wei(10.1234567, Units.ETHER).toEther(2, true)).toBe('10.12');
});

test("toWei", () => {
  expect(new Wei(10.125, Units.ETHER).toWei().toString()).toBe('10125000000000000000');
});

test("toHex", () => {
  expect(new Wei(10.125, Units.ETHER).toHex()).toBe('0x8c8339dafed48000');
  expect(new Wei(1, Units.WEI).toHex()).toBe('0x1');
  expect(new Wei(16, Units.WEI).toHex()).toBe('0x10');
});


test('toString returns string', () => {
  const v = new Wei(1000010000000000000).toString();
  expect(typeof v).toEqual('string');
});

test('toString uses 5 decimals as default', () => {
  expect(new Wei(1000010000000000000).toString()).toEqual('1.00001');
});

test('toString convert to Milli', () => {
  expect(new Wei(1000010000000000000).toString(Units.MILLI)).toEqual('1000.01');
  expect(new Wei(1000010000000000000).toString(Units.MILLI, 5, false, true)).toEqual('1000.01000');
});

test('toString shows 3 decimals', () => {
  expect(new Wei(1000010000000000000).toString(Units.MILLI, 3)).toEqual('1000.01');
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
});

test('mul', () => {
  expect(new Wei(5).mul(2).value.toFixed()).toEqual("10");
});

test('mul bignum', () => {
  expect(new Wei(5).mul(new BigNumber(2)).value.toFixed()).toEqual("10");
});

test("math operations", () => {
  expect(
    new Wei("5", Units.ETHER)
      .mul(2)
      .divide(4)
      .minus(new Wei(1, Units.ETHER))
      .toString()
  ).toBe('1.5');
});