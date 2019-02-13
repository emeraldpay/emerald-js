import { isValidAddress } from 'ethereumjs-util';
import { Address } from './types';

export class EthAddress implements Address {
  constructor(readonly address: string) {

  }

  isValid(): boolean {
    return isValidAddress(this.address);
  }

}