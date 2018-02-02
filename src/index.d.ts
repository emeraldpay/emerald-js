import BigNumber from "bignumber.js";

export declare class EthApi {
    getBalance(address: string, blockNumber: number | string = 'latest'): Promise<BigNumber>
}

export class EthRpc {

    public eth: EthApi;
}