// @flow
import kbpgp from 'kbpgp';

export default class Verify {
    ring: kbpgp.keyring.KeyRing;
    constructor() {
      this.ring = new kbpgp.keyring.KeyRing();
    }

  /**
   * Initialize with armored public keys
   */
    init(publicKeys: Array<string>): void {
      const kms = [];
      publicKeys.forEach((armored) => {
        kbpgp.KeyManager.import_from_armored_pgp({ armored }, (err, key) => {
          if (!err) {
            kms.push(key);
          } else {
            throw err;
          }
        });
      });

      this.ring = new kbpgp.keyring.KeyRing();
      kms.forEach((km) => {
        this.ring.add_key_manager(km);
      });
    }

    /**
     * Verifies signature of passed data
     * @param data - signed data
     * @param signature - Armored signature
     */
    verify(data: Buffer, signature: string) : Promise<string> {
      return new Promise((resolve, reject) => {
        kbpgp.unbox({ keyfetch: this.ring, data, armored: signature }, (err, literals) => {
          if (err !== null) {
            reject(err);
          } else {
            let km = null;
            const ds = literals[0].get_data_signer();
            if (ds) {
              km = ds.get_key_manager();
            }
            if (km) {
              resolve(km.get_pgp_fingerprint().toString('hex'));
            } else {
              reject(new Error('No key found'));
            }
          }
        });
      });
    }
}
