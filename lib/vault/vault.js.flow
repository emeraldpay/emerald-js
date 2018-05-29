// @flow
import assert from 'assert';
import type { IVaultProvider, Account, TxSignRequest, Contact } from './types';

function notNull(value: any, param: string) {
  return assert(value, `${param} must not be null`);
}

function notEmpty(value: any, param: string) {
  return assert(value && (value.length > 0), `${param} must not be empty`);
}

export default class Vault {
    provider: IVaultProvider;

    constructor(provider: IVaultProvider) {
      this.provider = provider;
    }

    /**
     * Returns the client current version
     */
    currentVersion(): Promise<string> {
      return this.provider.currentVersion();
    }

    /**
     * Returns the list of all not hidden (by default) accounts from the keystore.
     * @param chain - chain name
     * @param showHidden - also show hidden accounts
     * @returns {*}
     */
    listAccounts(chain: string, showHidden: boolean = false): Promise<Array<Account>> {
      notNull(chain, 'chain');
      return this.provider.listAccounts(chain, showHidden);
    }

    signTransaction(tx: TxSignRequest, passphrase: string, chain: string) {
      notNull(chain, 'chain');
      return this.provider.signTransaction(tx, passphrase, chain);
    }

    importAccount(data, chain: string) {
      notNull(chain, 'chain');
      return this.provider.importAccount(data, chain);
    }

    unhideAccount(address: string, chain: string) {
      notNull(chain, 'chain');
      return this.provider.unhideAccount(address, chain);
    }

    hideAccount(address: string, chain: string) {
      notNull(chain, 'chain');
      return this.provider.hideAccount(address, chain);
    }

    exportAccount(address: string, chain: string) {
      notNull(chain, 'chain');
      return this.provider.exportAccount(address, chain);
    }

    updateAccount(address: string, name: string, description: string = '', chain: string) {
      notNull(chain, 'chain');
      return this.provider.updateAccount(address, name, description, chain);
    }

    newAccount(passphrase: string, name: string, description: string, chain: string) {
      notNull(chain, 'chain');
      return this.provider.newAccount(passphrase, name, description, chain);
    }

    importContract(address: string, name: string, abi: any, chain: string): Promise<string> {
      notNull(chain, 'chain');
      return this.provider.importContract(address, name, abi, chain);
    }

    listContracts(chain: string): Promise<any> {
      notNull(chain, 'chain');
      return this.provider.listContracts(chain);
    }

    listAddresses(chain: string): Promise<Contact[]> {
      notNull(chain, 'chain');
      return this.provider.listAddresses(chain);
    }

    importAddress(addressItem: Contact, chain: string): Promise<any> {
      notNull(chain, 'chain');
      return this.provider.importAddress(addressItem, chain);
    }

    deleteAddress(address: string, chain: string): Promise<any> {
      return this.provider.deleteAddress(address, chain);
    }

    generateMnemonic(): Promise<string> {
      return this.provider.generateMnemonic();
    }

    /**
     * Creates new account in the vault and returns address of it
     */
    importMnemonic(
      passphrase: string, name: string, description: string,
      mnemonic: string, path: string, chain: string,
    ): Promise<string> {
      try {
        notNull(chain, 'chain');
        notEmpty(passphrase, 'passphrase');
        return this.provider.importMnemonic(passphrase, name, description, mnemonic, path, chain);
      } catch (error) {
        return Promise.reject(error);
      }
    }
}
