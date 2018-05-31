// @flow
import Wallet from 'ethereumjs-wallet';
import ethUtil from 'ethereumjs-util';
import EthereumTx from 'ethereumjs-tx';

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
      return this.wallet.getAddressString();
    }

    /**
     * Returns RLP encoded signed transaction
     */
    signTx(txData): string {
      const tx = new EthereumTx(null);
      tx.gasLimit = txData.gasLimit;
      tx.gasPrice = txData.gasPrice;
      tx.nonce = txData.nonce;
      tx.value = txData.value;
      tx.data = txData.data;
      tx.chainId = txData.chainId;
      tx.sign(this.wallet.getPrivateKey());
      return `0x${tx.serialize().toString('hex')}`;
    }
}

export default WalletWrapper;
