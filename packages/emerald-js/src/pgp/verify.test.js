// @flow
import Verify from './verify';

const publicKeys2 = ['-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
'Comment: GPGTools - https://gpgtools.org\n' +
'\n' +
'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\n' +
'adpYEwT7ZDoRcND0\n' +
'=hCZx\n' +
'-----END PGP PUBLIC KEY BLOCK-----'];

const publicKeys: Array<string> = ['-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
'\n' +
'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\n' +
'Xg4=\n' +
'=hEcw\n' +
'-----END PGP PUBLIC KEY BLOCK-----'];
const signedMessage = Buffer.from('Signed message');
const validSignature = '-----BEGIN PGP SIGNATURE-----\n' +
    '\n' +
    'iQIcBAABCAAGBQJaBE55AAoJELm4xnVFo0z8D7AQALIdEHnQwQeTW7ydDlwne/ki\n' +
    'dT6b4PIJ5wyaMetLondMNCDITDBxR/ulYsvRUZNQFWPIV/WL0/W78M7OJGnoHjZ6\n' +
    'ADVUW4nuyFP+K2xVzztyth4XPX1BfbpPJQcwuOnlpIIJDPia22p4voXujvlEQBrX\n' +
    'DKGlvo9cxUqg72zwWygF4hkNtvEnPQKgxMYKSXOEZ8nVgzyg1C2KJ2TxiFVV4rSB\n' +
    'rP/D13IxgTi0Oh/KLzVAXj/JNUDikIKV80BCe7UFDTkNdl9OwCpPug1481zx7QFh\n' +
    'Nt5cxPe2HpXZQxAhhpwj692mcDAtVTAr+JM/zOfoudPLi4hR7E57hg9NpY8YiZVc\n' +
    'oup/X6I57/ZrS9bvrwbabOF7IagFsNpcsfuDtZ+fuIINtAHoMMvD+Wbtf2/mcWFT\n' +
    'JjIErLCarYUt9f+5JQXrhDpcfoYxb47IzK+n1C7FwOJlRB9DxO1m1s3UQ6bhDSte\n' +
    '+xTdFB+YF61YwQxCMBwGGbM8cXHIwsD79DnVEJUgIvVCD/yMFNoKyTtKGkBYnwKN\n' +
    'HdgVvTyOG9RNeH3vAygWg4978FtzbXcwCsvHQ8XsQwsYJFs5ZjOXPWZ0xFCD9+io\n' +
    'sAlIFEkMFZtKFdDK+z1n2kr2yg7nPs8p8UvRzQbc5azPtnr7ZhvZhsW7/fPrtORb\n' +
    'MX4brmLTotRQ+BFBEtKL\n' +
    '=7I8n\n' +
    '-----END PGP SIGNATURE-----\n';

const invalidSignature = '-----BEGIN PGP SIGNATURE-----\n' +
    '\n' +
    'iQIcBAABCAAGBQJaBDXcAAoJELm4xnVFo0z8XmsP/RihzQoQrYyS59eGt6Z2U5Y3\n' +
    'tMyRaBGUQEajvcd2kdpoCMDOYNYOfz2IPcWkmBUKkAgkLxvQcF0aaLarv6fg0nmd\n' +
    'OjsndtgkV03KrdDGHyUTrLRqndr5hUTx71Gk4epFBE1OZeFkpN8FVOHinSFGISNe\n' +
    'Pr7tUi59jXquYXeOeJMnia/3QbeiuLqSG4avGWiygISg2s1zsQzRSrvemMv6MvNl\n' +
    '9ka1LGO9epVT5X5X5hMg+NYGloyiMXvKHynsSLYNZekL7FLd1o9j8oKWS3MyxC2D\n' +
    'Etff63vHaJWOqhe0jIhVJj1OAeiqaoO/1lJI8GZvmv2qlUOE7/nWDJVRoszuVUN1\n' +
    'gYNwLx/ahS6MAgxEt4mPORwmWzF46eG/idt8z5m+uzEdAKnPpwrdvjiMjKy8s3O0\n' +
    'kwHG5fVUvp52n80NQWnRiwCzh4Y6WehJOaZZULFg7kHQO8R0VP8pIO7DbZjSm1gp\n' +
    '1hEoo/WU72Ijjr4UNydc3fMzn3LndrrKLNgZsTalw7Kkn80cPGC62IAiADW7kTsO\n' +
    'qDs66si3WPZ8RuEGL5Nnvj/YySKlBWbReyVHb08IPQHfEGERyrBtycu8EOclxtV9\n' +
    'KBGFFsmi0zIJ+/78CknxNUyOhEa3L16/l328tmWX7BmL0VOzAw9IIFPdpDhtKpN8\n' +
    'XSL7r47Za+AKhH+K/wUE\n' +
    '=DVCJ\n' +
    '-----END PGP SIGNATURE-----\n';

describe('Verify', () => {
  it('should verify signed data', () => {
    const v = new Verify();
    v.init(publicKeys);
    return v.verify(signedMessage, validSignature);
  });

  it('should not verify modified data', () => {
    const v = new Verify();
    v.init(publicKeys);
    expect.assertions(1);
    return expect(v.verify(signedMessage.slice(1), validSignature)).rejects.toBeDefined();
  });

  it('should not verify with another key', () => {
    const v = new Verify();
    v.init(publicKeys2);
    expect.assertions(1);
    return expect(v.verify(signedMessage, validSignature)).rejects.toBeDefined();
  });

  it('should not verify without public keys', () => {
    const v = new Verify();
    v.init([]);
    expect.assertions(1);
    return expect(v.verify(signedMessage, validSignature)).rejects.toBeDefined();
  });

  it('should not verify with broken signature', () => {
    const v = new Verify();
    v.init(publicKeys);
    expect.assertions(1);
    return expect(v.verify(signedMessage, invalidSignature)).rejects.toBeDefined();
  });

  it('should reject with error if init() had not been called', () => {
    const v = new Verify();
    expect.assertions(1);
    return expect(v.verify(signedMessage, validSignature)).rejects.toBeDefined();
  });
});
