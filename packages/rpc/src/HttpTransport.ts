import 'isomorphic-fetch';
import { Transport, JsonRpcRequest } from './JsonRpc';

const baseHeaders = {
  'Content-Type': 'application/json',
};

/**
 * Transport implementation based on HTTP protocols
 */
export default class HttpTransport implements Transport {
    url: string;
    headers: any;

    constructor(url: string, headers?: any) {
      this.url = url;
      this.headers = headers;
    }

    async request(request: Array<JsonRpcRequest>): Promise<Array<any>> {
      const opt = {
        method: 'POST',
        headers: Object.assign(baseHeaders, this.headers),
        body: JSON.stringify(request),
      };

      const response = await fetch(this.url, opt);
      if (response.status !== 200) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      return response.json();
    }
}

type DefinedAnswer = {
  method: string,
  params: string,
  result?: any,
  error?: any
}

/**
 * Transport which replies with predefined responses
 */
export class PredefinedTransport implements Transport {
  responses: Array<DefinedAnswer> = [];

  addResponse(method: string, params: Array<any>, result?: any, error?: any): PredefinedTransport {
    this.responses.push({
      method,
      params: JSON.stringify(params),
      result,
      error
    });
    return this;
  }

  request(req: Array<JsonRpcRequest>): Promise<Array<any>> {
    return Promise.resolve(req.map((it) => {
      let result = this.responses.find((resp) =>
        resp.method === it.method && resp.params == JSON.stringify(it.params)
      );
      if (typeof result == 'undefined') {
        return {
          id: it.id,
          error: 'Result not set'
        }
      }
      if (result.error) {
        return {
          id: it.id,
          error: result.error,
        }
      } else {
        return {
          id: it.id,
          result: result.result
        }
      }
    }));
  }

}