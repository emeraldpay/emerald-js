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