import * as qs from 'qs';

export default class TransactionUri {
  constructor(abi, transaction) {
    this.abi = abi;
    this.transaction = transaction;
  }

  toString() {
    let additionalTxParams = {};
    if (this.transaction.method) {
      additionalTxParams = {
        mode: 'contract_function',
        functionSignature: this.props.abi.find((item) => item.name === this.transaction.method),
        argsDefaults: this.transaction.params,
        data: this.transaction.data,
      };
    }

    let txUrlObj = {
      ...this.transaction,
      ...additionalTxParams,
    };

    return `ethereum:${txUrlObj.to}?${qs.stringify(txUrlObj)}`;
  }
}
