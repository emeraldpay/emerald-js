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
import {JsonRpc, Transport, JsonRpcError, DefaultJsonRpc} from './';
import {PredefinedTransport} from './HttpTransport';

test('JsonRpcError constructor', () => {
  const err = new JsonRpcError({ code: 1, message: 'errmsg' });
  expect(err.message).toEqual('errmsg');
  expect(err.name).toEqual('Error');
  expect(err.code).toEqual(1);
});

test('batch request with handlers', () => {
  const transport = new PredefinedTransport()
    .addResponse('eth_getBalance', ['0x01', 'latest'], '0x100')
    .addResponse('eth_getBalance', ['0x02', 'latest'], '0x200')
    .addResponse('eth_getBalance', ['0x03', 'latest'], '0x300');
  const rpc = new DefaultJsonRpc(transport);

  let balance1;
  let balance2;
  let balance3;

  const batch = rpc.batch();
  batch.addCall('eth_getBalance', ['0x01', 'latest']).then((resp) => { balance1 = resp; });
  batch.addCall('eth_getBalance', ['0x02', 'latest']).then((resp) => { balance2 = resp; });
  batch.addCall('eth_getBalance', ['0x03', 'latest']).then((resp) => { balance3 = resp; });

  return rpc.execute(batch)
    .then(() =>
        expect(balance1).toEqual('0x100')
          && expect(balance2).toEqual('0x200')
          && expect(balance3).toEqual('0x300'));
});

test('batch request without handlers', () => {
  const balancesResponse = [
    { id: 1, result: '0x300' },
    { id: 2, result: '0x200' },
    { id: 3, result: '0x100' },
  ];

  const transport = new PredefinedTransport()
    .addResponse('eth_getBalance', ['0x01', 'latest'], '0x100')
    .addResponse('eth_getBalance', ['0x02', 'latest'], '0x200')
    .addResponse('eth_getBalance', ['0x03', 'latest'], '0x300');
  const rpc = new DefaultJsonRpc(transport);


  const batch = rpc.batch();
  batch.addCall('eth_getBalance', ['0x03', 'latest']);
  batch.addCall('eth_getBalance', ['0x02', 'latest']);
  batch.addCall('eth_getBalance', ['0x01', 'latest']);

  const promise = rpc.execute(batch);

  return promise
    .then(response => expect(JSON.stringify(response.results)).toEqual(JSON.stringify(balancesResponse)));
});


test('empty batch request', () => {
  const transport = new PredefinedTransport();
  const rpc = new DefaultJsonRpc(transport);

  const batch = rpc.batch();
  const promise = rpc.execute(batch);

  return promise
    .then(response => expect(response.results).toHaveLength(0));

});
