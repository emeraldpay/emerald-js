import BigNumber from "bignumber.js";

export declare class EthApi {
    getBalance(address: string, blockNumber: number | string = 'latest'): Promise<BigNumber>
}

export declare class JsonRpc {

}

export declare class EthRpc {

    public eth: EthApi;

    constructor(jsonRpc: JsonRpc);
}