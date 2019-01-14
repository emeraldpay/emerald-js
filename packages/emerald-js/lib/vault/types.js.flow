// @flow

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
    signTransaction(tx: TxSignRequest, passphrase: string, chain: string): Promise<any>;
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
    importMnemonic(passphrase: string, name: string, description: string,
      mnemonic: string, path: string, chain: string): Promise<string>
}

