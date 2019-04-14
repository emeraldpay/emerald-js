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
import VerifyingJsonRpc, {Verifier} from './VerifyingJsonRpc';
import {Batch, DefaultBatch} from './Batch';
import {PredefinedTransport} from './HttpTransport';
import {DefaultJsonRpc}  from './JsonRpc';


class VerifyOk implements Verifier {
  setup(_: Batch) {
  }

  verify(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

class VerifyFail implements Verifier {
  setup(_: Batch) {
  }

  verify(): Promise<boolean> {
    return Promise.resolve(false);
  }
}

test('VerifyJsonRpc: verifies: accept', () => {

  const transport = new PredefinedTransport()
    .addResponse('net_peerCount', [],'0x10');

  const batch = new DefaultBatch();

  const rpc = new VerifyingJsonRpc(new DefaultJsonRpc(transport));
  rpc.verifyWith(new VerifyOk());
  return rpc.execute(batch)
});

test('VerifyJsonRpc: verifies : decline', () => {

  const transport = new PredefinedTransport()
    .addResponse('net_peerCount', [],'0x1');

  const batch = new DefaultBatch();

  const rpc = new VerifyingJsonRpc(new DefaultJsonRpc(transport));
  rpc.verifyWith(new VerifyFail());
  expect.assertions(1);

  return rpc.execute(batch)
    .catch((err) => expect(err.message).toEqual('Batch validation failed'))
});

test('VerifyJsonRpc: skip resolving if validation failed', () => {

  const transport = new PredefinedTransport()
    .addResponse('net_peerCount', [],'0x1')
    .addResponse('test_foo', [],'bar');

  const batch = new DefaultBatch();
  let handler = jest.fn();
  let onError = jest.fn();
  batch.addCall('test_foo', [])
    .then(handler).catch(onError);

  const rpc = new VerifyingJsonRpc(new DefaultJsonRpc(transport));
  rpc.verifyWith(new VerifyFail());

  expect.assertions(3);
  return rpc.execute(batch)
    .catch((err) => {
      expect(err.message).toEqual('Batch validation failed');
      expect(batch.getItems()[0].response).toBeNull();
      expect(handler).not.toBeCalled();
    })
});

test('VerifyJsonRpc: resolves if validation passed', () => {

  const transport = new PredefinedTransport()
    .addResponse('net_peerCount', [],'0x5')
    .addResponse('test_foo', [],'bar');

  const batch = new DefaultBatch();
  let handler = jest.fn();
  let onError = jest.fn();
  batch.addCall('test_foo', [])
    .then(handler)
    .catch(onError);

  const rpc = new VerifyingJsonRpc(new DefaultJsonRpc(transport));
  rpc.verifyWith(new VerifyOk());

  return rpc.execute(batch)
    .then( () => {
      expect(handler).toBeCalledWith('bar');
      expect(onError).not.toBeCalled();
    })
});
