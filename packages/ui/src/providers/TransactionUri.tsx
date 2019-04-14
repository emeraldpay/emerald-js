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