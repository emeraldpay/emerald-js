import BigNumber from "bignumber.js";


export declare interface Transport {

}

export declare class HttpTransport implements Transport {
    constructor(url: string);
}

export declare class JsonRpc {
    constructor(transport: Transport)
}

export interface CallData {
    to?: string;
    value?: number | string | BigNumber;
    gas?: number | string | BigNumber;
    gasPrice?: number | string | BigNumber;
    data?: string;
    nonce?: number;
    from?: string;
}

interface SyncingStatus {
    startingBlock: number;
    currentBlock: number;
    highestBlock: number;
}
type SyncingResult = false | SyncingStatus;

interface Block {
    number: number | null;
    hash: string | null;
    parentHash: string;
    nonce: string | null;
    sha3Uncles: string;
    logsBloom: string | null;
    transactionsRoot: string;
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

export declare class EthApi {
    protocolVersion(): Promise<String>;
    getBalance(address: string, blockNumber?: number | string): Promise<BigNumber>;
    getBlockNumber(): Promise<number>;
    getBlock(hashOrNumber: string | number | 'earliest' | 'latest' | 'pending'): Promise<BlockWithoutTxData>;

    gasPrice(): Promise<BigNumber>;
    estimateGas(callData: CallData): Promise<number>;
    getSyncing(): Promise<SyncingResult>;
}

export declare class NetApi {
    version(): Promise<string>;
    listening(): Promise<boolean>;
    peerCount(): Promise<number>;
}

export declare class EthRpc {

    public eth: EthApi;
    public net: NetApi;

    constructor(jsonRpc: JsonRpc);
}