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
import contracts, { InputValues } from '@emeraldplatform/contracts';
import EthRpc from './EthRpc';

interface Props {
  method: string;
  params: InputValues;
  abi?: any;
  address: string;
  refresh: number;
  children?: any;
  renderEmpty?: any;
};

interface State {
  data: any;
};

class ContractProvider extends React.Component<Props, State> {
  static defaultProps = {
    method: null,
    params: null,
    abi: null,
    refresh: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.setData();
  }

  componentDidUpdate(prevProps, prevState) {
    const abiChanged = prevProps.abi !== this.props.abi;
    const methodChanged = prevProps.method !== this.props.method;
    const paramsChanged = prevProps.params !== this.props.params;
    const addressChanged = prevProps.address !== this.props.address;

    if (addressChanged || abiChanged || methodChanged || paramsChanged) {
      return this.setData();
    }
  }

  setData() {
    const func = this.props.abi.find((f) => f.name === this.props.method);
    const data = contracts.functionToData(func, this.props.params as InputValues);
    this.setState({data});
  }


  render() {
    if (this.state.data === null) { return null; }
    return (
      <EthRpc method="eth.call" params={[{to: this.props.address, data: this.state.data}]} refresh={this.props.refresh}>
        {result => {
           if (result === 0) {
             return this.props.renderEmpty();
           }
           const func = this.props.abi.find((f) => f.name === this.props.method);
           const decodedResult = contracts.dataToParams(func, result);
           return this.props.children(decodedResult);
        }}
      </EthRpc>
    );
  }
}

export default ContractProvider;