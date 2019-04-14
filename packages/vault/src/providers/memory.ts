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
import { IVaultProvider, Account, TxSignRequest, Contact } from '../types';

export default class InMemoryProvider implements IVaultProvider {
  currentVersion(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  importAddress(contact: Contact, chain: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  listAddresses(chain: string): Promise<Contact[]> {
    throw new Error("Method not implemented.");
  }
  deleteAddress(address: string, chain: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
    accounts: {
        [chain: string] : Array<any>
    };

    contracts: {
        [chain: string] : Array<any>
    };

    constructor() {
      this.accounts = {};
      this.contracts = {};
    }

  /**
     * Returns the list of all not hidden (by default) accounts from the keystore.
     * @param chain - chain name
     * @param showHidden - also show hidden accounts
     * @returns {*}
     */
    listAccounts(chain: string, showHidden: boolean = false): Promise<Array<Account>> {
      const accounts = this.accounts[chain] || [];
      const result = accounts
        .filter(a => (showHidden ? (true) : (!a.hidden)))
        .map(a => ({
          address: a.address,
          name: a.name,
          description: a.description,
          hidden: a.hidden,
          hardware: a.hardware,
        }));
      return Promise.resolve(result);
    }

    signTransaction(tx: TxSignRequest, passphrase: string, chain: string): Promise<string> {
      return Promise.reject(new Error('NOT IMPLEMENTED'));
    }

    importAccount(data, chain: string): Promise<any> {
      return Promise.resolve();
    }

    unhideAccount(address: string, chain: string): Promise<any> {
      const accounts = this.accounts[chain] || [];
      const idx = accounts.findIndex(elem => elem.address === address);
      if (idx >= 0) {
        this.accounts[chain][idx].hidden = false;
      }
      return Promise.resolve(true);
    }

    hideAccount(address: string, chain: string): Promise<any> {
      const accounts = this.accounts[chain] || [];
      const idx = accounts.findIndex(elem => elem.address === address);
      if (idx >= 0) {
        this.accounts[chain][idx].hidden = true;
      }
      return Promise.resolve(true);
    }

    exportAccount(address: string, chain: string): Promise<string> {
      const accounts = this.accounts[chain] || [];
      const idx = accounts.findIndex(elem => elem.address === address);
      if (idx >= 0) {
        return Promise.resolve(this.accounts[chain][idx].V3);
      }
      return Promise.resolve('');
    }

    updateAccount(address: string, name: string, description: string = '', chain: string): Promise<any> {
      return Promise.resolve();
    }

    newAccount(passphrase: string, name: string, description: string, chain: string): Promise<string> {
      const newAccount = Wallet.generate();
      const address = `0x${newAccount.getAddress().toString('hex')}`;
      const accountData = {
        address,
        name,
        description,
        V3: newAccount.toV3(passphrase),
        hidden: false,
        hardware: false,
      };

      this.accounts[chain] = this.accounts[chain] || [];
      this.accounts[chain].push(accountData);

      return Promise.resolve(address);
    }

    generateMnemonic(): Promise<string> {
      return Promise.reject(new Error('NOT IMPLEMENTED'));
    }

    importMnemonic(passphrase: string, name: string, description: string, mnemonic: string, path: string, chain: string): Promise<string> {
      return Promise.reject(new Error('NOT IMPLEMENTED'));
    }

    importContract(address: string, name: string, abi: any, chain: string): Promise<boolean> {
      const contractData = {
        address,
        name,
      };
      this.contracts[chain] = this.contracts[chain] || [];
      this.contracts[chain].push(contractData);
      return Promise.resolve(true);
    }

    listContracts(chain: string): Promise<any> {
      const contracts = this.contracts[chain] || [];
      const result = contracts
        .map(a => ({
          address: a.address,
          name: a.name,
        }));
      return Promise.resolve(result);
    }
}
