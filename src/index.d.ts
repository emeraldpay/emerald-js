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

export declare class EthApi {
    protocolVersion(): Promise<String>;
    getBalance(address: string, blockNumber?: number | string): Promise<BigNumber>;
    getBlockNumber(): Promise<number>;
    gasPrice(): Promise<BigNumber>;
    estimateGas(callData: CallData): Promise<number>;
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