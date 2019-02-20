declare module 'ethereumjs-wallet' {
  class Wallet {
    static generate(): any;
    static fromPrivateKey(key: Buffer): Wallet
    static fromV3(json: string, password: string): Wallet
    getPrivateKey(): Buffer
    getAddressString(): string
    toV3String(password: string, opts?: any): string;
  }

  namespace Wallet {}

  export = Wallet
}

declare module 'ethereumjs-wallet/hdkey' {

  class Wallet {
    static fromPrivateKey(key: Buffer): Wallet
    static fromV3(json: string, password: string): Wallet
    getPrivateKey(): Buffer
    getAddressString(): string
  }

  class EthereumHDKey {
    privateExtendedKey (): string
    publicExtendedKey (): string
    derivePath (path: string): EthereumHDKey
    deriveChild (index: number): EthereumHDKey
    getWallet (): Wallet
  }

  export function fromMasterSeed(seed: Buffer): EthereumHDKey
  export function fromExtendedKey(base58key: string): EthereumHDKey
}
