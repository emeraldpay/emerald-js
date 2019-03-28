import VerifyingJsonRpc, {VerifyBlockHash, VerifyGenesis, VerifyMinPeers, VerifyNotSyncing} from './VerifyingJsonRpc';
import {DefaultBatch} from './Batch';
import {PredefinedTransport} from './HttpTransport';
import { DefaultJsonRpc }  from './JsonRpc';

// ==========================================================================================
// VerifyMinPeers

test('VerifyMinPeers: fails on negative number', () => {
  expect(() => new VerifyMinPeers(-1)).toThrow();
});


test('VerifyMinPeers: accepts good value', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyMinPeers(3);
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: '0x1f'
  };
  return Promise.all(batch.resolve()).then((_) => {
    return verify.verify()
  }).then((act) => {
    expect(act).toBe(true);
  });
});

test('VerifyMinPeers: reject small value', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyMinPeers(3);
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: '0x02'
  };
  return Promise.all(batch.resolve()).then((_) => {
    return verify.verify()
  }).then((act) => {
    expect(act).toBe(false);
  });
});

test('VerifyMinPeers: reject invalid value', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyMinPeers(3);
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: '0x'
  };
  return Promise.all(batch.resolve()).then((_) => {
    return verify.verify()
  }).then((act) => {
    expect(act).toBe(false);
  });
});

// ==========================================================================================
// VerifyNotSyncing

test('VerifyNotSyncing: accepts good state', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyNotSyncing();
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: false
  };
  return Promise.all(batch.resolve())
    .then((_) =>  verify.verify())
    .then((act) => expect(act).toBe(true)
  );
});

test('VerifyNotSyncing: reject bad state', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyNotSyncing();
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: {
      startingBlock: '0x400',
      currentBlock: '0x514',
      highestBlock: '0x1412'
    }
  };
  return Promise.all(batch.resolve())
    .then((_) =>  verify.verify())
    .then((act) => expect(act).toBe(false)
    );
});

// ==========================================================================================
// VerifyGenesis

test('VerifyGenesis: accepts good state', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyGenesis('0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3');
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: {
      number: '0x0',
      hash: '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3'
    }
  };
  return Promise.all(batch.resolve())
    .then((_) =>  verify.verify())
    .then((act) => expect(act).toBe(true)
    );
});

test('VerifyGenesis: reject bad state', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyGenesis('0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3');
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: {
      number: '0x0',
      hash: '0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6'
    }
  };
  return Promise.all(batch.resolve())
    .then((_) =>  verify.verify())
    .then((act) => expect(act).toBe(false)
    );
});

// ==========================================================================================
// VerifyBlockHash

test('VerifyBlockHash: accepts good block', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyBlockHash(1920000, '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f');
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: {
      number: '0x1d4c00',
      hash: '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f'
    }
  };
  batch.getItems()[1].response = {
    jsonrpc: '2.0',
    result: '0x1e8480'
  };
  return Promise.all(batch.resolve())
    .then((_) =>  verify.verify())
    .then((act) => expect(act).toBe(true)
    );
});

test('VerifyBlockHash: ignore block not synced', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyBlockHash(1920000, '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f');
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: null
  };
  batch.getItems()[1].response = {
    jsonrpc: '2.0',
    result: '0x1d24f0'
  };
  return Promise.all(batch.resolve())
    .then((_) =>  verify.verify())
    .then((act) => expect(act).toBe(true)
    );
});

test('VerifyBlockHash: reject bad state', () => {
  const batch = new DefaultBatch();
  const verify = new VerifyBlockHash(1920000, '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f');
  verify.setup(batch);

  batch.getItems()[0].response = {
    jsonrpc: '2.0',
    result: {
      number: '0x1d4c00',
      hash: '0x4985f5ca3d2afbec36529aa96f74de3cc10a2a4a6c44f2157a57d2c6059a11bb'
    }
  };
  batch.getItems()[1].response = {
    jsonrpc: '2.0',
    result: '0x1e8480'
  };
  return Promise.all(batch.resolve())
    .then((_) =>  verify.verify())
    .then((act) => expect(act).toBe(false)
    );
});

// ==========================================================================================
// VerifyJsonRpc

test('VerifyJsonRpc: verifies min peers : accept', () => {

  const transport = new PredefinedTransport()
    .addResponse('net_peerCount', [],'0x10');

  const batch = new DefaultBatch();

  const rpc = new VerifyingJsonRpc(new DefaultJsonRpc(transport));
  rpc.minPeers(3);
  return rpc.execute(batch)
});

test('VerifyJsonRpc: verifies min peers : decline', () => {

  const transport = new PredefinedTransport()
    .addResponse('net_peerCount', [],'0x1');

  const batch = new DefaultBatch();

  const rpc = new VerifyingJsonRpc(new DefaultJsonRpc(transport));
  rpc.minPeers(3);
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
  rpc.minPeers(3);

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
  rpc.minPeers(3);

  return rpc.execute(batch)
    .then( () => {
      expect(handler).toBeCalledWith('bar');
      expect(onError).not.toBeCalled();
    })
});
