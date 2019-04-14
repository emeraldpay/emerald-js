/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import * as Wallet from 'ethereumjs-wallet';
import * as ethUtil from 'ethereumjs-util';
import * as EthereumTx from 'ethereumjs-tx';

export interface EthTxData {
  nonce: number;
  data?: string;
  value?: number | string;
  gasLimit?: number | string;
  gasPrice?: number | string;
  chainId: number;
}

export class EthAccount {
    wallet: Wallet;

    static fromV3(input, password: string) {
      return Wallet.fromV3(input, password);
    }

    static toV3(privateKey: string, password: string): string {
      const wallet = Wallet.fromPrivateKey(ethUtil.toBuffer(privateKey));
      return wallet.toV3String(password);
    }

    static fromPrivateKey(privateKey: string): EthAccount {
      return new EthAccount(Wallet.fromPrivateKey(ethUtil.toBuffer(privateKey)));
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
    signTx(txData: EthTxData): string {
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

export default EthAccount;
