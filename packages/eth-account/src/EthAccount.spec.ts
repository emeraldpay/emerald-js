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
import * as utils from 'ethereumjs-util';
// import EthereumTx from 'ethereumjs-tx';

import EthAccount from './EthAccount';

const EthereumTx = require('ethereumjs-tx');

const { rlp } = utils;

test('fromPrivateKey', () => {
  expect(() => EthAccount.fromPrivateKey('0x12')).toThrowError();
});

test('getAddress() returns address as hex string', () => {
  const wallet = EthAccount.fromPrivateKey('0x09b055edb6b45e461d55f50bc5590e69ba6c480b47254afe8884b236c706a2e6');
  expect(wallet.getAddress()).toEqual('0x5b06c264bf2cd877a2b85d03d720674566231fa0');
});

describe('Wallet', () => {
  it('should sign tx', () => {
    const wallet = EthAccount.fromPrivateKey('0xe331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109');
    const txData = {
      chainId: 1,
      nonce: 0,
      gasPrice: 100,
      gasLimit: 1000,
      value: 0,
      data: '0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820af38ce82c3a099c3efae04c6a69a94c77ed4d313b65cb39426e4bad43298d98a0029',
    };
    const rlpTx = wallet.signTx(txData);
    const decoded = new EthereumTx(rlp.decode(rlpTx));
    expect(decoded.value.toString('hex')).toEqual('');
    expect(decoded.gasLimit.toString('hex')).toEqual('03e8');
    expect(decoded.data.toString('hex')).toEqual(txData.data.substring(2));
  });
});
