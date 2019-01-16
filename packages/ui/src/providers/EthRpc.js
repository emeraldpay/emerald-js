import React from 'react';
import PropTypes from 'prop-types';
import { HttpTransport, EthRpc, JsonRpc } from '@emeraldplatform/emerald-js';

import { EthJsonRpcContext } from './EthJsonRpcProvider';

class EthRpcProvider extends React.Component {
  static propTypes = {
    method: PropTypes.string.isRequired,
    params: PropTypes.array,
    url: PropTypes.string.isRequired,
  };

  static defaultProps = {
    method: null,
    params: null,
  };

  constructor() {
    super();

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
    if (this.state.invervalId) {
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
    const jsonRpc = new JsonRpc(new HttpTransport(this.props.url));
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

export default ({method, params, refresh, children}) => {
  return (
    <EthJsonRpcContext.Consumer>
      {({ url }) => {
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
