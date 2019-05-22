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
import { HttpTransport, DefaultJsonRpc} from '@emeraldplatform/rpc';
import { EthRpc } from '@emeraldplatform/eth-rpc';

import { EthJsonRpcContext } from './EthJsonRpcProvider';

interface Props {
  method: string;
  params?: any;
  url: string;
  refresh?: any;
  children?: any;
};

interface State {
  intervalId: any;
  ethrpc?: any;
  result: any;
};

class EthRpcProvider extends React.Component<Props, State> {

  static defaultProps = {
    method: null,
    params: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      ethrpc: null,
      result: null,
      intervalId: null
    };
    this.getResult = this.getResult.bind(this);
  }

  componentDidMount() {
    this.setEthRpc();
    this.setInterval();
  }

  setInterval() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
    if (this.props.refresh) {
      this.setState({
        intervalId: setInterval(this.getResult, this.props.refresh)
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  componentDidUpdate(prevProps, prevState) {
    const transportChanged = prevProps.url !== this.props.url;
    const refreshChanged = prevProps.refresh !== this.props.refresh;

    if (refreshChanged) {
      return this.setInterval();
    }

    if (transportChanged) {
      return this.setEthRpc();
    }

    const ethrpcChanged = prevState.ethrpc !== this.state.ethrpc;
    const methodChanged = prevProps.method !== this.props.method;
    const paramsChanged = prevProps.params !== this.props.params;


    if (ethrpcChanged || methodChanged || paramsChanged) {
      return this.getResult();
    }
  }

  setEthRpc() {
    const jsonRpc = new DefaultJsonRpc(new HttpTransport(this.props.url));
    const ethrpc = new EthRpc(jsonRpc);

    this.setState({ ethrpc });
  }

  getResult() {
    const method = this.props.method
      .split('.')
      .reduce((memo, item) => memo[item], this.state.ethrpc);
    const params = this.props.params || [];

    if (typeof method !== 'function') {
      throw new Error('EthRpc called with method that doesnt exist. Check the method sent to EthRpc');
    }
    return method.call(this.state.ethrpc, ...params)
      .then((result) => this.setState({ ...this.state, result }));
  }

  render() {
    if (this.state.result === null) { return null; }
    return this.props.children(this.state.result);
  }
}

interface EthRpcProps {
  method: string;
  params?: any;
  refresh?: any;
  children?: any;
};

export default ({method, params, refresh, children } : EthRpcProps) => {
  return (
    <EthJsonRpcContext.Consumer>
      {({ url }: { url: any}) => {
         const props = {
           method,
           params,
           refresh,
           url,
         };
         return (
           <EthRpcProvider {...props}>
               {children}
           </EthRpcProvider>
         );
      }}
    </EthJsonRpcContext.Consumer>
  );
};
