import BigNumber from "bignumber.js";


export declare interface Transport {

}

export declare class HttpTransport implements Transport {
    constructor(url: string);
}

export declare class JsonRpc {
    constructor(transport: Transport)
}

export declare class EthApi {
    getBalance(address: string, blockNumber: number | string = 'latest'): Promise<BigNumber>
}

export declare class EthRpc {

    public eth: EthApi;

    constructor(jsonRpc: JsonRpc);
}