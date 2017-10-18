import InMemoryProvider from './providers/memory';
import Vault from './vault';
import Address from '../address';

describe('Vault with InMemoryProvider', () => {
  it('should create new account', () => {
    const vault = new Vault(new InMemoryProvider());
    const chain = 'mainnet';

    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then((address) => {
        expect(Address.isValid(address)).toBeTruthy();
      });
  });

  it('should list not hidden accounts', () => {
    const vault = new Vault(new InMemoryProvider());
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
    const vault = new Vault(new InMemoryProvider());
    const chain = 'mainnet';
    return vault.newAccount('passPhrase', 'name1', 'desc', chain)
      .then(address => vault.hideAccount(address, chain)
        .then(() => vault.listAccounts(chain).then((list) => {
          expect(list).toHaveLength(0);
        })));
  });

  it('should list hidden accounts', () => {
    const vault = new Vault(new InMemoryProvider());
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
});
