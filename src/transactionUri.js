import { rlp } from 'ethereumjs-util';
import * as qs from 'qs';

class TransactionUri {
  constructor(transaction, abi) {
    this.transaction = transaction;
    this.abi = abi;
  }

  toString() {
    const tx = {
      ...this.transaction,
      abi: this.abi
    };
    return `ethereum:${this.transaction.to}?${qs.stringify(this.transaction)}`;
  }
}
