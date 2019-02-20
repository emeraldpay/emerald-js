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

    async request(request: JsonRpcRequest | Array<JsonRpcRequest>): Promise<any> {
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
