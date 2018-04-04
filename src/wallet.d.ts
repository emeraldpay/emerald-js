export declare class Wallet {
    static fromPrivateKey(privateKeyHex: string): Wallet;
    getAddress(): string;
}