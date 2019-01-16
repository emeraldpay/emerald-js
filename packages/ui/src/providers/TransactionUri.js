import React from 'react';
import PropTypes from 'prop-types';
import * as qs from 'qs';

export default class TransactionUri extends React.Component {
  static propTypes = {
    transaction: PropTypes.object.isRequired,
    abi: PropTypes.object.isRequired
  };

  encodeURI(obj) {
    return `ethereum:${obj.to}?${qs.stringify(obj)}`;
  }

  render() {
    const { to, from, value, gas, method, params } = this.props;
    let transaction = {
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