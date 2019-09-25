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
import { Address } from './types';

export class EthAddress implements Address {
  constructor(readonly address: string) {

  }

  static fromHexString(hex: string): Address {
    if (!EthAddress.isValidAddress(hex)) {
      throw new Error('Invalid address');
    }
    return new EthAddress(hex);
  }

  isValid(): boolean {
    return EthAddress.isValidAddress(this.address);
  }

  static isValidAddress(address: string): boolean {
    return /^0x[0-9a-fA-F]{40}$/.test(address);
  }

  public equals (another: Address): boolean {
    return (this.address.toLowerCase() === another.toString().toLowerCase());
  };

  public toString (): string {
    return this.address;
  }

}
