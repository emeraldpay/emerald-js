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
import {EthAddress} from './address';

describe('EthAddress', () => {
  test('41-character alphanumeric hash preceded by 0x is valid', () => {
    expect(new EthAddress('0x6ebeb2af2e734fbba2b58c5b922628af442527ce').isValid()).toBeTruthy();
    expect(new EthAddress('0x0E7C045110B8dbF29765047380898919C5CB56F4').isValid()).toBeTruthy();
  });

  test('long hashes are not valid', () => {
    expect(new EthAddress('0x6ebeb2af2e734fbba2b58c5b922628af442527cefa').isValid()).toBeFalsy();
    expect(new EthAddress('0x0E7C045110B8dbF29765047380898919C5CB56F4C2').isValid()).toBeFalsy();
  });

  test('short hashes are not valid', () => {
    expect(new EthAddress('0x6ebeb2af2e734fbba2b58c5b922628af442527').isValid()).toBeFalsy();
  });

  test('hashes not preceded by 0x are not valid', () => {
    expect(new EthAddress('0E7C045110B8dbF29765047380898919C5CB56F4').isValid()).toBeFalsy();
  });

  test('empty hashes are not valid', () => {
    expect(new EthAddress('').isValid()).toBeFalsy();
  });
});
