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
import * as kbpgp from 'kbpgp';

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
