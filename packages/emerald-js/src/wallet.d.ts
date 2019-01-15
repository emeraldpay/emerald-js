export interface TxData {
    nonce: number;
    data?: string;
    value?: number | string;
    gasLimit?: number | string;
    gasPrice?: number | string;
    chainId: number;
}

export declare class Wallet {
    static fromPrivateKey(privateKeyHex: string): Wallet;
    getAddress(): string;
    signTx(txData: TxData): string;
}