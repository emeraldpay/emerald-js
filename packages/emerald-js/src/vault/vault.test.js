import InMemoryProvider from './providers/memory';
import Vault from './vault';
import Address from '../address';

describe('Vault with InMemoryProvider', () => {
  const newProvider = () => new InMemoryProvider();
  it('should create new account', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';

    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then((address) => {
        expect(Address.isValid(address)).toBeTruthy();
      });
  });

  it('should not import mnemonic with empty passphrase', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';
    expect.assertions(1);
    return expect(vault.importMnemonic('', 'name1', 'desc', 'mnemonic', chain)).rejects.toBeDefined();
  });

  it('should list not hidden accounts', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';
    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then(address => vault.listAccounts(chain).then((list) => {
        expect(list).toHaveLength(1);
        expect(list[0].address).toEqual(address);
        expect(list[0].name).toEqual('name1');
        expect(list[0].description).toEqual('desc');
        expect(list[0].hidden).toEqual(false);
      }));
  });

  it('should hide account', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';
    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then(address => vault.hideAccount(address, chain)
        .then(() => vault.listAccounts(chain))
        .then((list) => {
          expect(list).toHaveLength(0);
        }));
  });

  it('should unhide account', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';
    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then(address => vault.hideAccount(address, chain)
        .then(() => vault.listAccounts(chain))
        .then(list => expect(list).toHaveLength(0))
        .then(() => vault.unhideAccount(address, chain))
        .then(() => vault.listAccounts(chain))
        .then(list => expect(list).toHaveLength(1)));
  });

  it('should list hidden accounts', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';
    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then(address => vault.hideAccount(address, chain)
        .then(() =>
          vault.listAccounts(chain, true).then((list) => {
            expect(list).toHaveLength(1);
            expect(list[0].address).toEqual(address);
            expect(list[0].name).toEqual('name1');
            expect(list[0].description).toEqual('desc');
            expect(list[0].hidden).toEqual(true);
          })));
  });

  it('should export key file', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';
    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then(address => vault.exportAccount(address, chain)
        .then((keyFile) => {
          expect(keyFile.version).toEqual(3);
          expect(keyFile.address).toEqual(address.substring(2));
        }));
  });

  it('should import contract', () => {
    const vault = new Vault(newProvider());
    const chain = 'mainnet';
    return vault.importContract('0xContract1', 'Contract1', '', chain)
      .then(() => vault.listContracts(chain))
      .then(list => expect(list).toHaveLength(1));
  });
});
