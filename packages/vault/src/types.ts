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

export type Account = {
    address: string,
    name: string,
    description: string,
    hidden: boolean,
    hardware: boolean,
}

export type TxSignRequest = {

}

/**
 * Address book item
 */
export type Contact = {
  address: string,
  name?: string,
  description?: string,
}

export interface IVaultProvider {
    newAccount(passphrase: string, name: string, description: string, chain: string): Promise<string>;
    listAccounts(chain: string, showHidden?: boolean): Promise<Array<Account>>;
    signTransaction(tx: TxSignRequest, passphrase: string, chain: string): Promise<string>;
    importAccount(data, chain: string): Promise<any>;
    hideAccount(address: string, chain: string): Promise<any>;
    unhideAccount(address: string, chain: string): Promise<any>;
    updateAccount(address: string, name: string, description: string, chain: string): Promise<any>;
    exportAccount(address: string, chain: string): Promise<any>;
    importContract(address: string, name: string, abi: any, chain: string): Promise<any>;
    listContracts(chain: string): Promise<any>;
    importAddress(contact: Contact, chain: string): Promise<any>;
    listAddresses(chain: string): Promise<Contact[]>;
    deleteAddress(address: string, chain: string): Promise<any>;
    generateMnemonic(): Promise<string>;
    currentVersion(): Promise<string>;
    importMnemonic(passphrase: string, name: string, description: string,
      mnemonic: string, path: string, chain: string): Promise<string>
}

