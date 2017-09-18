/* @flow */
import JsonRpc from './jsonrpc';

class EthApi {
    rpc: JsonRpc;

    constructor(jsonRpc: JsonRpc) {
      this.rpc = jsonRpc;
    }

    /**
     * Returns the balance of the account of given address.
     */
    getBalance(address: string, blockNumber: number | string = 'latest') {
      return this.rpc.call('eth_getBalance', [address, blockNumber]);
    }

    /**
     * Returns the current price per gas in wei.
     */
    gasPrice() {
      return this.rpc.call('eth_gasPrice', []);
    }

    /**
     * Returns an object with data about the sync status or false.
     */
    syncing() {
      return this.rpc.call('eth_syncing', []);
    }

    /**
     * Executes a new message call immediately without creating a transaction on the block chain
     */
    call(to: string, data: string, blockNumber: number | string = 'latest') {
      return this.rpc.call('eth_call', [{ to, data }, blockNumber]);
    }

    /**
     * Returns the number of most recent block
     */
    blockNumber() {
      return this.rpc.call('eth_blockNumber', []);
    }

    /**
     * Returns information about a block by block number.
     */
    getBlockByNumber(blockNumber: number | string = 'latest', full: boolean = false) {
      return this.rpc.call('eth_getBlockByNumber', [blockNumber, full]);
    }

    /**
     * Returns the number of transactions sent from an address
     * @param address
     * @param blockNumber - integer block number, or the string 'latest', 'earliest' or 'pending'
     * @returns {*}
     */
    getTransactionCount(address: string, blockNumber: number | string = 'latest') {
      return this.rpc.call('eth_getTransactionCount', [address, blockNumber]);
    }

    /**
     * Creates new message call transaction or a contract creation for signed transactions.
     */
    sendRawTransaction(signed: string) {
      return this.rpc.call('eth_sendRawTransaction', [signed]);
    }

    /**
     * Returns the information about a transaction requested by transaction hash.
     */
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

    /**
     * Returns the current network id.
     */
    version() {
      return this.rpc.call('net_version', []);
    }

    /**
     * Returns number of peers currently connected to the client.
     */
    peerCount() {
      return this.rpc.call('net_peerCount', []);
    }
}

class Web3Api {
    rpc: JsonRpc;

    constructor(jsonRpc) {
      this.rpc = jsonRpc;
    }

    /**
     * Returns the current client version.
     */
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
