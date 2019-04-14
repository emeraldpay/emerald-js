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
