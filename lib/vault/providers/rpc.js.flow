// @flow
import assert from 'assert';
import JsonRpc from '../../rpc/jsonrpc';
import type { IVaultProvider, Account, TxSignRequest, Address } from '../types';

export default class JsonRpcProvider implements IVaultProvider {
    rpc: JsonRpc;

    constructor(jsonRpc: JsonRpc) {
      this.rpc = jsonRpc;
    }

    currentVersion(): Promise<string> {
      return this.rpc.call('emerald_currentVersion', []);
    }

    /**
     * Returns the list of all not hidden (by default) accounts from the keystore.
     * @param chain - chain name
     * @param showHidden - also show hidden accounts
     * @returns {*}
     */
    listAccounts(chain: string, showHidden: boolean = false): Promise<Array<Account>> {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_listAccounts', [{ chain, show_hidden: showHidden }])
        .then(accounts => accounts.map(a => ({
          address: a.address,
          name: a.name,
          description: a.description,
          hardware: a.hardware,
          hidden: a.is_hidden,
        })));
    }

    signTransaction(tx: TxSignRequest, passphrase: string, chain: string) {
      this.notNull(chain, 'chain');
      const withPass = { ...tx, passphrase };
      return this.rpc.call('emerald_signTransaction', [withPass, { chain }]);
    }

    importAccount(data, chain: string) {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_importAccount', [data, { chain }]);
    }

    unhideAccount(address: string, chain: string) {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_unhideAccount', [{ address }, { chain }]);
    }

    hideAccount(address: string, chain: string) {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_hideAccount', [{ address }, { chain }]);
    }

    exportAccount(address: string, chain: string) {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_exportAccount', [{ address }, { chain }]);
    }

    updateAccount(address: string, name: string, description: string = '', chain: string) {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_updateAccount', [{ name, description, address }, { chain }]);
    }

    newAccount(passphrase: string, name: string, description: string, chain: string): Promise<string> {
      this.notNull(chain, 'chain');
      const params = [{ passphrase, name, description }, { chain }];
      return this.rpc.call('emerald_newAccount', params);
    }

    importContract(address: string, name: string, abi: any, chain: string): Promise<boolean> {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_importContract', [{ address, name }, { chain }]);
    }

    listContracts(chain: string): Promise<any> {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_listContracts', [{ chain }]);
    }

    importAddress(item: Address, chain: string): Promise<any> {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_importAddress', [item, { chain }]);
    }

    listAddresses(chain: string): Promise<Address[]> {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_listAddresses', [{ chain }]);
    }

    deleteAddress(address: string, chain: string): Promise<any> {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_deleteAddress', [address, { chain }]);
    }

    generateMnemonic(): Promise<string> {
      return this.rpc.call('emerald_generateMnemonic', []);
    }

    importMnemonic(
      passphrase: string, name: string, description: string,
      mnemonic: string, path: string, chain: string,
    ): Promise<string> {
      this.notNull(chain, 'chain');
      const params = {
        name,
        description,
        mnemonic,
        password: passphrase,
        hd_path: path,
      };
      return this.rpc.call('emerald_importMnemonic', [params, { chain }]);
    }

    notNull(value: any, param: string) {
      return assert(value, `${param} must not be null`);
    }
}
