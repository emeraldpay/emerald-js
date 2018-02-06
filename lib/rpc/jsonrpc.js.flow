/* @flow */

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

export type ResponseHandler = (response: JsonRpcResponse) => void;

export type BatchRequest = {
    request: JsonRpcRequest,
    handler?: ResponseHandler,
}

export interface Transport {
    request(req: JsonRpcRequest | Array<JsonRpcRequest>): Promise<any>;
}

export class JsonRpcError extends Error {
    code: number;
    constructor(error: {code: number, message: string}) {
      super(error.message);
      this.message = error.message;
      this.name = this.constructor.name;
      this.code = error.code;
    }
}

export default class JsonRpc {
    requestSeq: number;
    transport: Transport;

    constructor(transport: Transport) {
      this.transport = transport;
      this.requestSeq = 1;
    }

    /**
     * This call analyses JSON RPC response.
     * It returns promise which resolves whether 'result' field found
     * or reject in case 'error' field found.
     *
     * @returns {Promise}
     */
    call(method: string, params: any): Promise<any> {
      const request = this.newRequest(method, params);

      return this.transport.request(request).then((json) => {
        if (json.result || json.result === false || json.result === null) {
          return json.result;
        } else if (json.error) {
          throw new JsonRpcError(json.error);
        } else {
          throw new Error(`Unknown JSON RPC response: ${JSON.stringify(json)},
                     method: ${method},
                     params: ${JSON.stringify(params)}`);
        }
      }).catch((error) => { throw error; });
    }

    /**
     * Batch JSON RPC request.
     *
     * --> [
     *      {"foo": "boo"},
     *      {"jsonrpc": "2.0", "method": "foo.get", "params": {"name": "myself"}, "id": "5"},
     *     ]
     * <-- [
     *      {"jsonrpc": "2.0", "error": {"code": -32601, "message": "Method not found"}, "id": "5"},
     *      {"jsonrpc": "2.0", "result": ["hello", 5], "id": "9"}
     *     ]
     * @param requests
     * @returns {Promise.<any>}
     */
    batch(requests: Array<BatchRequest>): Promise<Array<any>> {
      if (requests && requests.length === 0) {
        return Promise.resolve([]);
      }
      // build map id -> handler
      const handlers = {};
      requests.forEach((r) => {
        handlers[r.request.id] = r.handler;
      });

      return this.transport
        .request(requests.map(r => r.request))
        .then((responses) => {
          // call handler associated with request
          responses.forEach((response) => {
            if (typeof handlers[response.id] === 'function') {
              handlers[response.id](response);
            }
          });
          return responses;
        })
        .catch((error) => { throw error; });
    }

    /**
     * Creates new JSON RPC request with associated handler which can be used in batch request
     *
     * @param method
     * @param params
     * @param handler
     * @returns {{request: JsonRpcRequest, handler: ResponseHandler}}
     */
    newBatchRequest(method: string, params: any, handler?: ResponseHandler): BatchRequest {
      return {
        request: this.newRequest(method, params),
        handler,
      };
    }

    newRequest(method: string, params: any): JsonRpcRequest {
      const request = {
        jsonrpc: '2.0',
        method,
        params,
        id: this.requestSeq,
      };
      this.requestSeq += 1;
      return request;
    }
}
