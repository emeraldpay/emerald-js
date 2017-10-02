// @flow
import JsonRpc from '../rpc/jsonrpc';
import assert from '../assert';

export default class Vault {
    rpc: JsonRpc;

    constructor(jsonRpc: JsonRpc) {
      this.rpc = jsonRpc;
    }

    listAccounts(chain: string) {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_listAccounts', [{ chain }]);
    }

    signTransaction(tx, passphrase: string, chain: string) {
      this.notNull(chain, 'chain');
      const withPass = { ...tx, passphrase };
      return this.rpc.call('emerald_signTransaction', [withPass, { chain }]);
    }

    importAccount(data, chain: string) {
      this.notNull(chain, 'chain');
      return this.rpc.call('emerald_importAccount', [data, { chain }]);
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

    newAccount(passphrase: string, name: string, description: string, chain: string) {
      this.notNull(chain, 'chain');
      const params = [{ passphrase, name, description }, { chain }];
      return this.rpc.call('emerald_newAccount', params);
    }

    addContract(address: string, name: string, chain: string): Promise<string> {
      return Promise.resolve(address);
      // TODO: return this.rpc.call('emerald_addContract', [{address, name }]);
    }

    notNull(value: any, param: string) {
      return assert.assert(value, `${param} must not be null`);
    }
}
