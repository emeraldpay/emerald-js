import { rlp } from 'ethereumjs-util';
import * as qs from 'qs';
import { BigNumber } from 'bignumber.js';

type TAddress = string;

interface ITransaction {
  from?: TAddress;
  to?: TAddress;
  value?: BigNumber | string | number;
  data?: string;
  gas?: BigNumber | string | number;
  gasPrice?: BigNumber | string | number;
}

export default class Transaction {
  constructor(
    public from?: TAddress,
    public to?: TAddress,
    public value?: BigNumber | string | number,
    public data?: string,
    public gas?: BigNumber | string | number,
    public gasPrice?: BigNumber | string | number
  ) {
    this.from = from;
    this.to = to;
    this.value = value;
    this.data = data;
    this.gas = gas;
    this.gasPrice = gasPrice;
  }
}


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
