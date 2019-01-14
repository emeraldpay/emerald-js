// @flow
import 'isomorphic-fetch';
import { Transport, type JsonRpcRequest } from './jsonrpc';

const baseHeaders = {
  'Content-Type': 'application/json',
};


export class HttpTransport implements Transport {
    url: string;
    headers: any;

    constructor(url: string, headers: any) {
      this.url = url;
      this.headers = headers;
    }

    request(request: JsonRpcRequest | Array<JsonRpcRequest>): Promise<any> {
      const opt = {
        method: 'POST',
        headers: Object.assign(baseHeaders, this.headers),
        body: JSON.stringify(request),
      };

      return fetch(this.url, opt).then((response) => {
        if (response.status !== 200) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      });
    }
}
