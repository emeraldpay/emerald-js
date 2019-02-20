import { isValidAddress } from 'ethereumjs-util';
import { Address } from './types';

export class EthAddress implements Address {
  constructor(readonly address: string) {

  }

  static fromHexString(hex: string): Address {
    if (!isValidAddress(hex)) {
      throw new Error('Invalid address');
    }
    return new EthAddress(hex);
  }
  
  isValid(): boolean {
    return isValidAddress(this.address);
  }

}