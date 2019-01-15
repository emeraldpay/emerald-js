import BigNumber from "bignumber.js";


export declare interface Transport {

}

export declare class HttpTransport implements Transport {
    constructor(url: string);
}

export declare class JsonRpc {
    constructor(transport: Transport)
}

interface CallTxDataBase {
    to?: string;
    value?: number | string | BigNumber;
    gas?: number | string | BigNumber;
    gasPrice?: number | string | BigNumber;
    data?: string;
    nonce?: number;
}

export interface TxData extends CallTxDataBase {
    from: string;
}

export interface CallData extends CallTxDataBase {
    from?: string;
}

interface SyncingStatus {
    startingBlock: number;
    currentBlock: number;
    highestBlock: number;
}
export type SyncingResult = false | SyncingStatus;

interface Block {
    number: number | null;
    hash: string | null;
    parentHash: string;
    nonce: string | null;
    sha3Uncles: string;
    logsBloom: string | null;
    transactionsRoot: string;
    receiptsRoot: string;
    stateRoot: string;
    miner: string;
    difficulty: BigNumber;
    totalDifficulty: BigNumber;
    extraData: string;
    size: number;
    gasLimit: number;
    gasUsed: number;
    timestamp: number;
    uncles: string[];
}

interface BlockWithoutTxData extends Block {
    transactions: string[];
}

interface BlockWithTxData extends Block {
    transactions: Transaction[];
}

interface Transaction {
    hash: string;
    nonce: number;
    blockHash: string | null;
    blockNumber: number | null;
    transactionIndex: number | null;
    from: string;
    to: string | null;
    value: BigNumber;
    gasPrice: BigNumber;
    gas: number;
    input: string;
    replayProtected?: boolean;
    v?: string;
    r?: string;
    s?: string;
}

interface TransactionReceipt {
    blockHash: string;
    blockNumber: number;
    transactionHash: string;
    transactionIndex: number;
    from: string;
    to: string;
    status: null | string | 0 | 1;
    cumulativeGasUsed: number;
    gasUsed: number;
    contractAddress: string | null;
    logs: LogEntry[];
}

interface LogEntry {
    logIndex: number | null;
    transactionIndex: number | null;
    transactionHash: string;
    blockHash: string | null;
    blockNumber: number | null;
    address: string;
    data: string;
    topics: string[];
}

export declare class Web3Api {
    clientVersion(): Promise<string>;
}

export declare class EthApi {
    getCompilers(): Promise<string[]>;
    compile: {
        solidity(code: string): Promise<object>;
    };
    protocolVersion(): Promise<string>;
    getCode(address: string): Promise<string>;
    getBalance(address: string, blockNumber?: number | string): Promise<BigNumber>;
    getBlockNumber(): Promise<number>;
    getBlock(hashOrNumber: string | number | 'earliest' | 'latest' | 'pending'): Promise<BlockWithoutTxData>;
    getBlock(hashOrNumber: string | number | 'earliest' | 'latest' | 'pending', includeTxObjects: true): Promise<BlockWithTxData>;
    getTransactionCount(address: string, atBlock?: number | 'earliest' | 'latest' | 'pending'): Promise<number>;
    getTransaction(hash: string): Promise<Transaction>;
    getTransactionReceipt(hash: string): Promise<TransactionReceipt | null>;
    gasPrice(): Promise<BigNumber>;
    estimateGas(callData: CallData): Promise<number>;
    getSyncing(): Promise<SyncingResult>;
    call(callData: CallData): Promise<string>;
    sendTransaction(txData: TxData): Promise<string>;
    sendRawTransaction(rawTxData: string): Promise<string>;
}

export declare class NetApi {
    version(): Promise<string>;
    listening(): Promise<boolean>;
    peerCount(): Promise<number>;
}

export declare class ExtApi {
    getBlocks(from: number, to: number): Promise<Array<BlockWithoutTxData>>;
}

export declare class EthRpc {

    public eth: EthApi;
    public net: NetApi;
    public web3: Web3Api;
    public ext: ExtApi;

    constructor(jsonRpc: JsonRpc);
}