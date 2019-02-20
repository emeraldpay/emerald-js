import { JsonRpc } from '@emeraldplatform/rpc';
import { convert } from '@emeraldplatform/core';


import EthApi from './api/eth';
import NetApi from './api/net';
import Web3Api from './api/web3';
import ExtApi from './api/ext';

export default class EthRpc {
    rpc: JsonRpc;
    eth: EthApi;
    net: NetApi;
    web3: Web3Api;
    ext: ExtApi;

    constructor(jsonRpc: JsonRpc) {
      this.rpc = jsonRpc;
      this.eth = new EthApi(jsonRpc);
      this.net = new NetApi(jsonRpc);
      this.web3 = new Web3Api(jsonRpc);
      this.ext = new ExtApi(jsonRpc);
    }
cd 
    raw(method: string, params: any): Promise<any> {
      return this.rpc.call(method, params);
    }
}
