// @flow
import BigNumber from 'bignumber.js';
import convert from '../convert';
import format from './format';
import JsonRpc from './jsonrpc';
import type { CallObject, SyncingResult } from './types';

class EthApi {
    rpc: JsonRpc;
    compile: object;

    constructor(jsonRpc: JsonRpc) {
      this.rpc = jsonRpc;
      this.compile = {
        solidity: this.compileSolidity.bind(this),
      };
    }

    /**
     * Gets a list of available compilers
     */
    getCompilers(): Promise<string[]> {
      return this.rpc.call('eth_getCompilers', []);
    }

    /**
     * Returns compiled solidity code
     */
    compileSolidity(code): Promise<object> {
      return this.rpc.call('eth_compileSolidity', [code]);
    }

    /**
     * Returns the current Ethereum protocol version
     */
    protocolVersion(): Promise<string> {
      return this.rpc.call('eth_protocolVersion', []);
    }

    /**
     * Returns the balance of the account of given address.
     */
    getBalance(address: string, blockNumber: number | string = 'latest'): Promise<BigNumber> {
      return this.rpc.call('eth_getBalance', [address, blockNumber])
        .then(hexBalance => convert.toBigNumber(hexBalance));
    }

    /**
     * Returns the current price per gas in wei.
     */
    gasPrice(): Promise<BigNumber> {
      return this.rpc.call('eth_gasPrice', [])
        .then(hexPrice => convert.toBigNumber(hexPrice));
    }

    /**
     * Returns an object with data about the sync status or false.
     */
    getSyncing(): Promise<SyncingResult> {
      return this.rpc.call('eth_syncing', [])
        .then((result) => {
          if (!result) {
            return false;
          }
          return {
            startingBlock: convert.toNumber(result.startingBlock),
            currentBlock: convert.toNumber(result.currentBlock),
            highestBlock: convert.toNumber(result.highestBlock),
          };
        });
    }

    /**
     * Executes a new message call immediately without creating a transaction on the block chain
     */
    call(callData, blockNumber: number | string = 'latest'): Promise<any> {
      return this.rpc.call('eth_call', [{ to: callData.to, data: callData.data }, blockNumber]);
    }

    /**
     * Executes a message call or transaction and returns the amount of the gas used
     */
    estimateGas(call: CallObject): Promise<number> {
      const txData = {
        ...call,
        gas: (call.gas !== undefined) ? format.toHex(call.gas) : call.gas,
        nonce: (call.nonce !== undefined) ? format.toHex(call.nonce) : call.nonce,
      };
      return this.rpc.call('eth_estimateGas', [txData]).then(gas => convert.toNumber(gas));
    }

    /**
     * Returns code at a given address.
     */
    getCode(address: string, blockNumber: number | string = 'latest'): Promise<string> {
      return this.rpc.call('eth_getCode', [address, blockNumber]);
    }

    /**
     * Returns the number of most recent block
     *
     * Note: It should be called blockNumber() but to be web3 compatible
     *       we call it getBlockNumber(), FEF
     */
    getBlockNumber(): Promise<number> {
      return this.rpc.call('eth_blockNumber', [])
        .then(result => convert.toNumber(result));
    }

    /**
     * Returns information about a block by block number.
     */
    getBlockByNumber(blockNumber: number | string = 'latest', full: boolean = false): Promise<any> {
      return this.rpc.call('eth_getBlockByNumber', [blockNumber, full]);
    }

    /**
     * Returns a block matching the block number or block hash.
     */
    getBlock(hashOrNumber: string | number | 'earliest' | 'latest' | 'pending', full: boolean = false) {
      const method = (typeof hashOrNumber === 'string' && hashOrNumber.indexOf('0x') === 0) ?
        'eth_getBlockByHash' : 'eth_getBlockByNumber';
      let block = hashOrNumber;
      if (method === 'eth_getBlockByNumber') {
        if (!format.isPredefinedBlockNumber(hashOrNumber)) {
          block = format.toHex(hashOrNumber);
        }
      }
      return this.rpc.call(method, [block, full]).then(b => format.block(b));
    }

    /**
     * Returns the number of transactions sent from an address
     * @param address
     * @param blockNumber - integer block number, or the string 'latest', 'earliest' or 'pending'
     */
    getTransactionCount(address: string, blockNumber: number | string = 'latest'): Promise<any> {
      return this.rpc.call('eth_getTransactionCount', [address, blockNumber])
        .then(convert.toNumber);
    }

    /**
     * Returns the receipt of a transaction by transaction hash.
     */
    getTransactionReceipt(hash: string): Promise<any> {
      return this.rpc.call('eth_getTransactionReceipt', [hash])
        .then(format.transactionReceipt);
    }

    /**
     * Creates new message call transaction or a contract creation for signed transactions.
     */
    sendRawTransaction(rawTxData: string): Promise<string> {
      return this.rpc.call('eth_sendRawTransaction', [rawTxData]);
    }

    /**
     * Returns the information about a transaction requested by transaction hash.
     */
    getTransaction(hash: string): Promise<any> {
      return this.rpc.call('eth_getTransactionByHash', [hash])
        .then(format.transaction);
    }

    getAddressTransactions(
      address: string,
      blockNumFloor: number,
      blockNumCeil: number,
      toOrFrom: string,
      standardOrContract: string,
      beginPageIndex: number,
      endPageIndex: number,
      orderByOldest: boolean
    ): Promise<Array<string>> {
      return this.rpc.call('geth_getAddressTransactions', [
        address,
        blockNumFloor,
        blockNumCeil,
        toOrFrom,
        standardOrContract,
        beginPageIndex,
        endPageIndex,
        orderByOldest
      ]);
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
    version(): Promise<string> {
      return this.rpc.call('net_version', []);
    }

    /**
     * Returns `true` if client is actively listening for network connections.
     */
    listening(): Promise<boolean> {
      return this.rpc.call('net_listening', []);
    }

    /**
     * Returns number of peers currently connected to the client.
     */
    peerCount(): Promise<number> {
      return this.rpc.call('net_peerCount', [])
        .then(result => convert.toNumber(result));
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
    clientVersion(): Promise<string> {
      return this.rpc.call('web3_clientVersion', []);
    }
}

const formatBatchBlockResponse = responses => responses.filter(r => r.result).map(r => format.block(r.result));
/**
 * Extended API
 */
class ExtApi {
    rpc: JsonRpc;

    constructor(jsonRpc) {
      this.rpc = jsonRpc;
    }

    getBlocks(from: number, to: number) {
      let requests = [];

      for (let i = from; i <= to; i += 1) {
        requests.push(this.rpc.newBatchRequest('eth_getBlockByNumber', [format.toHex(i), false]));
      }

      return this.rpc.batch(requests).then(formatBatchBlockResponse);
    }

    getBlocksByNumbers(number: number | string) {
      let formattedNumber = number;
      if (typeof number === 'number') {
        formattedNumber = format.toHex(number);
      }

      const requests = formattedNumber.map(
        (blockNumber) => this.rpc.newBatchRequest('eth_getBlockByNumber', [blockNumber, false])
      )
      return this.rpc.batch(requests).then(formatBatchBlockResponse);
    }

    getBalances(addresses: Array<string>, blockNumber: number | string = 'latest') {
      const balances = {};
      const requests = addresses.map(a =>
        this.rpc.newBatchRequest('eth_getBalance', [a, blockNumber], (resp) => { balances[a] = resp.result; }));

      return this.rpc.batch(requests).then(() => balances);
    }

    /**
     * Batch request transactions by hashes
     * @param hashes
     * @returns {Promise.<any>}
     */
    getTransactions(hashes: Array<string>): Promise<any> {
      const requests = hashes.map(h =>
        this.rpc.newBatchRequest('eth_getTransactionByHash', [h]));
      return this.rpc.batch(requests);
    }

    /**
     * Many calls in one request
     */
    batchCall(calls: Array<{id: string, to: string, data: string}>, blockNumber: number | string = 'latest'): Promise<any> {
      const results = {};
      const responseHandler = id => (resp) => { results[id] = resp; };

      const requests = calls.map(c =>
        this.rpc.newBatchRequest(
          'eth_call',
          [{ to: c.to, data: c.data }, blockNumber],
          responseHandler(c.id),
        ));
      return this.rpc.batch(requests).then(() => results);
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

    raw(method: string, params: any): Promise<any> {
      return this.rpc.call(method, params);
    }
}
