import React from 'react';
import PropTypes from 'prop-types';
import { HttpTransport, JsonRpc, VaultJsonRpcProvider, Vault } from '@emeraldplatform/emerald-js';

import { VaultJsonRpcContext } from './VaultJsonRpcProvider';

class VaultRpcProvider extends React.Component {
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
    };
  }

  componentDidMount() {
    this.setVaultRpc();
  }

  componentDidUpdate(prevProps, prevState) {
    const transportChanged = prevProps.url !== this.props.url;
    if (transportChanged) {
      return this.setVaultRpc();
    }

    const vaultChanged = prevState.vault !== this.state.vault;
    const methodChanged = prevProps.method !== this.props.method;
    const paramsChanged = prevProps.params !== this.props.params;

    if (vaultChanged || methodChanged || paramsChanged) {
      return this.getResult();
    }
  }

  setVaultRpc() {
    const jsonRpc = new JsonRpc(new HttpTransport(this.props.url));
    const vaultRpc = new VaultJsonRpcProvider(jsonRpc);
    const vault = new Vault(vaultRpc);

    this.setState({ vault });
  }

  getResult() {
    const method = this.state.vault[this.props.method];
    const params = this.props.params || [];

    // TODO: fix having to pass chain here
    return method.call(this.state.vault, 'mainnet', ...params)
      .then((result) => this.setState({ ...this.state, result }));
  }

  render() {
    if (this.state.result === null) { return null; }
    return this.props.children(this.state.result);
  }
}

export default ({method, params, refresh, children}) => {
  return (
    <VaultJsonRpcContext.Consumer>
      {({ url }) => {
         const props = {
           method,
           params,
           refresh,
           url,
         };
         return (
           <VaultRpcProvider {...props}>
             {children}
           </VaultRpcProvider>
         );
      }}
    </VaultJsonRpcContext.Consumer>
  );
}