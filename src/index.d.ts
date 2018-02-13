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
    getBalance(address: string, blockNumber?: number | string): Promise<BigNum.eslintrc ignore path.eslintrc ignore pathber>;
    getBlockNumber(): Promise<number>;
    estimateGas(callData: CallData): Promise<number>;
}

export declare class NetApi {
    version(): Promise<string>;
}

export declare class EthRpc {

    public eth: EthApi;
    public net: NetApi;
    
    constructor(jsonRpc: JsonRpc);
}