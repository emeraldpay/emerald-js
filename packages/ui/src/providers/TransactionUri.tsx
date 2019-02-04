import * as React from 'react';
import * as qs from 'qs';

interface Props {
  abi?: any;
  to?: any;
  from?: any;
  value?: any;
  gas?: any;
  method?: any;
  params?: any;
  children?: any;
};

export default class TransactionUri extends React.Component<Props> {
  encodeURI(obj) {
    return `ethereum:${obj.to}?${qs.stringify(obj)}`;
  }

  render() {
    const { to, from, value, gas, method, params } = this.props;
    let transaction: any = {
      to,
      from,
      value,
      gas,
    }

    if (method && params) {
      transaction = {
        ...transaction,
        mode: 'contract_function',
        functionSignature: this.props.abi.find((item) => item.name === method),
        argsDefaults: params
      }
    }
    return this.props.children(this.encodeURI(transaction));
  }
}