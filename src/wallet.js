// @flow
import Wallet from 'ethereumjs-wallet';
import ethUtil from 'ethereumjs-util';

class WalletWrapper {
    wallet: Wallet;

    static fromV3(input, password) {
      return Wallet.fromV3(input, password);
    }

    static toV3(privateKey: string, password: string): string {
      const wallet = Wallet.fromPrivateKey(ethUtil.toBuffer(privateKey));
      return wallet.toV3String(password);
    }

    static fromPrivateKey(privateKey: string): WalletWrapper {
      return new WalletWrapper(Wallet.fromPrivateKey(ethUtil.toBuffer(privateKey)));
    }

    constructor(wallet: Wallet) {
      this.wallet = wallet;
    }

    toV3String(password: string): string {
      return this.wallet.toV3String(password);
    }

    getAddress(): string {
      return this.wallet.getAddress();
    }
}

export default WalletWrapper;
