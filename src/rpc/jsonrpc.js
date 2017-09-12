/* @flow */

export type JsonRpcRequest = {
    jsonrpc: string,
    method: string,
    params?: any,
    id: number,
};

export interface Transport {
    request(req: JsonRpcRequest | Array<JsonRpcRequest>): Promise<any>;
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
          throw new Error(json);
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
    batch(requests: Array<JsonRpcRequest>): Promise<any> {
      return this.transport.request(requests)
        .catch((error) => { throw error; });
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
