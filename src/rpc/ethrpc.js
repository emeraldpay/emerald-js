/* @flow */
import JsonRpc from './jsonrpc';

class EthApi {
    rpc: JsonRpc;

    constructor(jsonRpc: JsonRpc) {
      this.rpc = jsonRpc;
    }

    getBalance(address: string, blockNumber: number | string = 'latest') {
      return this.rpc.call('eth_getBalance', [address, blockNumber]);
    }

    gasPrice() {
      return this.rpc.call('eth_gasPrice', []);
    }

    syncing() {
      return this.rpc.call('eth_syncing', []);
    }

    call(to: string, data: string, blockNumber: number | string = 'latest') {
      return this.rpc.call('eth_call', [{ to, data }, blockNumber]);
    }


    blockNumber() {
      return this.rpc.call('eth_blockNumber', []);
    }

    getBlockByNumber(blockNumber: number | string = 'latest', full: boolean = false) {
      return this.rpc.call('eth_getBlockByNumber', [blockNumber, full]);
    }

    getTransactionCount(address: string) {
      return this.rpc.call('eth_getTransactionCount', [address, 'latest']);
    }

    sendRawTransaction(signed) {
      return this.rpc.call('eth_sendRawTransaction', [signed]);
    }

    getTransactionByHash(hash: string) {
      return this.rpc.call('eth_getTransactionByHash', [hash]);
    }

    /**
     * Returns the current ethereum protocol version.
     */
    protocolVersion() {
      return this.rpc.call('eth_protocolVersion');
    }
}

class NetApi {
    rpc: JsonRpc;

    constructor(jsonRpc) {
      this.rpc = jsonRpc;
    }

    version() {
      return this.rpc.call('net_version', []);
    }

    peerCount() {
      return this.rpc.call('net_peerCount', []);
    }
}

class Web3Api {
    rpc: JsonRpc;

    constructor(jsonRpc) {
      this.rpc = jsonRpc;
    }

    clientVersion() {
      return this.rpc.call('web3_clientVersion', []);
    }
}

/**
 * Extended API
 */
class ExtApi {
    rpc: JsonRpc;

    constructor(jsonRpc) {
      this.rpc = jsonRpc;
    }

    getBalances(addresses: Array<string>, blockNumber: number | string = 'latest') {
      const balances = {};
      const requests = addresses.map(a =>
        this.rpc.newBatchRequest('eth_getBalance', [a, blockNumber], (resp) => { balances[a] = resp.result; }));

      return this.rpc.batch(requests).then(() => balances);
    }
}

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


    raw(method: string, params) {
      return this.rpc.call(method, params);
    }
}
