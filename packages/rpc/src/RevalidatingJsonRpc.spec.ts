import {RevalidatingJsonRpc} from "./RevalidatingJsonRpc";
import {FailingJsonRpc, JsonRpc} from "./JsonRpc";
import {DefaultBatch} from "./Batch";

test('Invalidates on error', () => {
  let rpc = new RevalidatingJsonRpc(5000, new FailingJsonRpc());
  let handler = jest.fn();
  rpc.listener = handler;

  expect(rpc.status).toBe(true);

  return rpc.execute(new DefaultBatch())
    .catch((_) => {
      expect(rpc.status).toBe(false);
      expect(handler).toBeCalledWith(false);
    })
});

test('Doesnt call if invalid' , async () => {
  let rpcmock = {} as JsonRpc;
  let executeMock = jest.fn();
  executeMock.mockReturnValueOnce(Promise.reject());
  rpcmock.execute = executeMock;

  let rpc = new RevalidatingJsonRpc(5000, rpcmock);
  await rpc.revalidate();
  expect(rpc.status).toBe(false);
  expect(executeMock).toBeCalled();

  return rpc.execute(new DefaultBatch())
    .catch((_) => {
      expect(rpc.status).toBe(false);
      expect(executeMock).toBeCalledTimes(1);
    })
});
