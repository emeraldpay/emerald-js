// @flow

export type Account = {
    address: string,
    name: string,
    description: string,
    hidden: boolean,
    hardware: boolean,
}

export interface IVaultProvider {
    newAccount(passphrase: string, name: string, description: string, chain: string): Promise<string>;
    listAccounts(chain: string, showHidden?: boolean): Promise<Array<Account>>;
    signTransaction(tx, passphrase: string, chain: string): Promise<any>;
    importAccount(data, chain: string): Promise<any>;
    hideAccount(address: string, chain: string): Promise<any>;
    unhideAccount(address: string, chain: string): Promise<any>;
    updateAccount(address: string, name: string, description: string, chain: string): Promise<any>;
    exportAccount(address: string, chain: string): Promise<any>;
    importContract(address: string, name: string, abi: any, chain: string): Promise<any>;
    listContracts(chain: string): Promise<any>;
    generateMnemonic(): Promise<string>;
    importMnemonic(mnemonic: string, chain: string): Promise<any>;
}

