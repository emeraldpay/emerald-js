// @flow
import JsonRpc, { Transport, JsonRpcError } from './jsonrpc';

test('JsonRpcError constructor', () => {
  const err = new JsonRpcError({ code: 1, message: 'errmsg' });
  expect(err.message).toEqual('errmsg');
  expect(err.name).toEqual('Error');
  expect(err.code).toEqual(1);
});

test('batch request with handlers', () => {
  const transport: Transport = {
    request: () => Promise.resolve([
      { id: 3, result: '0x300' },
      { id: 2, result: '0x200' },
      { id: 1, result: '0x100' },
    ]),
  };
  const rpc = new JsonRpc(transport);

  let balance1;
  let balance2;
  let balance3;

  const promise = rpc.batch([
    rpc.newBatchRequest('eth_getBalance', ['0x01', 'latest'], (resp) => { balance1 = resp.result; }),
    rpc.newBatchRequest('eth_getBalance', ['0x02', 'latest'], (resp) => { balance2 = resp.result; }),
    rpc.newBatchRequest('eth_getBalance', ['0x03', 'latest'], (resp) => { balance3 = resp.result; }),
  ]);

  return promise.then(() => expect(balance1).toEqual('0x100')
          && expect(balance2).toEqual('0x200')
          && expect(balance3).toEqual('0x300'));
});

test('batch request without handlers', () => {
  const balancesResponse = [
    { id: 3, result: '0x300' },
    { id: 2, result: '0x200' },
    { id: 1, result: '0x100' },
  ];
  const transport: Transport = {
    request: () => Promise.resolve(balancesResponse),
  };
  const rpc = new JsonRpc(transport);

  const promise = rpc.batch([
    rpc.newBatchRequest('eth_getBalance', ['0x01', 'latest']),
    rpc.newBatchRequest('eth_getBalance', ['0x02', 'latest']),
    rpc.newBatchRequest('eth_getBalance', ['0x03', 'latest']),
  ]);

  return promise
    .then(response => expect(JSON.stringify(balancesResponse)).toEqual(JSON.stringify(response)));
});

test('empty batch request', () => {
  const balancesResponse = [
    { id: 3, result: '0x300' },
    { id: 2, result: '0x200' },
    { id: 1, result: '0x100' },
  ];
  const transport: Transport = {
    request: () => Promise.resolve(balancesResponse),
  };
  const rpc = new JsonRpc(transport);
  return rpc.batch([]).then(response => expect(response).toHaveLength(0));
});
