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
import {DefaultJsonRpc, FailingJsonRpc} from './JsonRpc';
import RotatingJsonRpc from './RotatingJsonRpc';
import {PredefinedTransport} from './HttpTransport';
import {DefaultBatch} from './Batch';


test('Call next if one failed', () => {
  const transport = new PredefinedTransport()
    .addResponse('test_foo', ['0x01'], '0x100');

  const rpc = new RotatingJsonRpc(
    new FailingJsonRpc(), new DefaultJsonRpc(transport)
  );
  const batch = new DefaultBatch();
  let promise = batch.addCall('test_foo', ['0x01']);

  return rpc.execute(batch).then((_) => {
    return promise.then((val) => expect(val).toBe('0x100'));
  });
});

test('Keep one if succeeded', () => {
  const transport = new PredefinedTransport()
    .addResponse('test_foo', ['0x01'], '0x100');

  const rpc = new RotatingJsonRpc(
    new DefaultJsonRpc(transport), new FailingJsonRpc()
  );
  const batch = new DefaultBatch();
  let promise = batch.addCall('test_foo', ['0x01']);

  return rpc.execute(batch).then((_) => {
    return promise.then((val) => expect(val).toBe('0x100'));
  });
});


test('Repeats until finds working', () => {
  const transport = new PredefinedTransport()
    .addResponse('test_foo', ['0x01'], '0x100');

  const rpc = new RotatingJsonRpc(
    new FailingJsonRpc(), new FailingJsonRpc(), new FailingJsonRpc(),
    new FailingJsonRpc(), new FailingJsonRpc(), new DefaultJsonRpc(transport)
  );
  const batch = new DefaultBatch();
  let promise = batch.addCall('test_foo', ['0x01']);

  return rpc.execute(batch).then((_) => {
    return promise.then((val) => expect(val).toBe('0x100'));
  });
});


test('Calls in same order as specified', () => {
  const transport1 = new PredefinedTransport()
    .addResponse('test_foo', ['0x01'], '0x100');
  const transport2 = new PredefinedTransport()
    .addResponse('test_foo', ['0x01'], '0x200');

  const rpc = new RotatingJsonRpc(
    new DefaultJsonRpc(transport1), new DefaultJsonRpc(transport2),
  );
  const batch = new DefaultBatch();
  let promise = batch.addCall('test_foo', ['0x01']);

  return rpc.execute(batch).then((_) => {
    return promise.then((val) => expect(val).toBe('0x100'));
  });
});