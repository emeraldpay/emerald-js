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
import * as fs from 'fs';
import InputDataDecoder from './InputDataDecoder';

const abi1 = require('../../test/abi1.json');
const abi2 = require('../../test/abi2.json');

describe('InputDataDecoder', () => {
  it('should handle nulls', () => {
    const data = [''];
    delete data[0];
    const decoder = new InputDataDecoder(abi1);
    decoder.decodeData(data[0]);
  });

  it('should decode contract call', () => {
    // https://etherscan.io/tx/0xa6f019f2fc916bd8df607f1c99148ebb06322999ff08bc88927fe8406acae1b2
    const data = "0x67043cae0000000000000000000000005a9dac9315fdd1c3d13ef8af7fdfeb522db08f020000000000000000000000000000000000000000000000000000000058a20230000000000000000000000000000000000000000000000000000000000040293400000000000000000000000000000000000000000000000000000000000000a0f3df64775a2dfb6bc9e09dced96d0816ff5055bf95da13ce5b6c3f53b97071c800000000000000000000000000000000000000000000000000000000000000034254430000000000000000000000000000000000000000000000000000000000";

    const decoder = new InputDataDecoder(abi1);
    const result = decoder.decodeData(data);
    expect(result.name).toEqual('registerOffChainDonation');
    expect(result.types).toEqual([
      'address',
      'uint256',
      'uint256',
      'string',
      'bytes32'
    ]);
    expect(result.inputs[0].toString(16)).toEqual('5a9dac9315fdd1c3d13ef8af7fdfeb522db08f02');
    expect(result.inputs[1].toString(16)).toEqual('58a20230');
    expect(result.inputs[2].toString(16)).toEqual('402934');
    expect(result.inputs[3]).toEqual('BTC');
  });

  it('should decode contract creation data', () => {
    const decoder = new InputDataDecoder(abi1);

    // https://etherscan.io/tx/0xc7add41f6ae5e4fe268f654709f450983510ab7da67812be608faf2133a90b5a
    const data = fs.readFileSync(`${__dirname}/../../test/contract_creation_data.txt`);
    const result = decoder.decodeData(data.toString())

    expect(result.inputs[0].toString(16)).toEqual('b2cb826c945d8df01802b5cf3c4105685d4933a0');
    expect(result.inputs[1].toString(16)).toEqual('STIFTUNG Dfinity FDC');
  });

  // https://github.com/miguelmota/ethereum-input-data-decoder/issues/8
  it('256 address', () => {
    const decoder = new InputDataDecoder(abi2);

    const data = '0xa9059cbb85f1150654584d0192059454e9dc1532d9d9cf914926406a02370cea80cf32f600000000000000000000000000000000000000000000000000000000033dc10b';

    const result = decoder.decodeData(data);
    expect(result.inputs[0].toString(16)).toEqual('e9dc1532d9d9cf914926406a02370cea80cf32f6');
    expect(result.inputs[1].toString(10)).toEqual('54378763');
  })
});
