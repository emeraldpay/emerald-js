import {Batch, BatchItem, DefaultBatch, RawBatchResponse} from './Batch';

export type JsonRpcRequest = {
    jsonrpc: string,
    method: string,
    params?: any,
    id: number,
};

export type JsonRpcResponse = {
    jsonrpc: string,
    result?: any,
    error?: any,
}

export interface Transport {
    request(req: Array<JsonRpcRequest>): Promise<Array<any>>;
}

export class JsonRpcError extends Error {
    code: number;
    constructor(error: {code: number, message: string}) {
      super(error.message);
      this.message = error.message;
      this.name = super.constructor.name;
      this.code = error.code;
    }
}

export interface JsonRpc {
    execute(batch: Batch): Promise<RawBatchResponse>;
    call(method: string, params: any): Promise<any>;
    batch(): Batch;
}

export abstract class AbstractJsonRpc implements JsonRpc {
  execute(batch: Batch): Promise<RawBatchResponse> {
    throw new Error('Not implemented');
  }
  call(method: string, params: any): Promise<any> {
    let batch = new DefaultBatch();
    let promise = batch.addCall(method, params);
    return this.execute(batch)
      .then((_) => promise);
  }
  batch(): Batch {
    return new DefaultBatch();
  }
}

export class DefaultJsonRpc extends AbstractJsonRpc implements JsonRpc {
    transport: Transport;

    constructor(transport: Transport) {
      super();
      this.transport = transport;
    }

    execute(batch: Batch): Promise<RawBatchResponse> {
      let requests = batch.getItems();
      if (requests && requests.length === 0) {
        return Promise.resolve(new RawBatchResponse([], batch));
      }
      // build map id -> handler
      const handlers: Map<number, BatchItem> = new Map();
      let i = 1;
      requests.forEach((r) => {
        r.request.id = i;
        handlers.set(i, r);
        i++;
      });

      return new Promise<RawBatchResponse>((resolve, reject) => {
        this.transport
          .request(requests.map(r => r.request))
          .then((responses) => {
            // call handler associated with request
            responses.forEach((response) => {
              let item = handlers.get(response.id);
              if (item) {
                item.response = response;
              }
            });
            batch.resolve();
            resolve(new RawBatchResponse(responses, batch));
          })
          .catch((error) => {
            batch.reject(error);
            reject(error);
          });
      })
    }
}

export class FailingJsonRpc extends AbstractJsonRpc implements JsonRpc {

  execute(batch: Batch): Promise<RawBatchResponse> {
    batch.reject('Always Fail');
    return Promise.reject(new Error('Always Fail'));
  }

}
