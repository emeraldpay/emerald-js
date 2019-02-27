import * as React from 'react';
import { HttpTransport, JsonRpc } from '@emeraldplatform/rpc';
import { Vault, JsonRpcProvider } from '@emeraldplatform/vault';

import { VaultJsonRpcContext } from './VaultJsonRpcProvider';

interface Props {
  method: string;
  params: any;
  url: string;
  children?: any;
};

interface State {
  vault?: any;
  ethrpc?: any;
  result?: any;
};

class VaultRpcProvider extends React.Component<Props, State> {
  static defaultProps = {
    method: null,
    params: null,
  };

  constructor(props) {
    super(props);

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
    const vaultRpc = new JsonRpcProvider(jsonRpc);
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

interface VaultRpcProps {
  method: string;
  params?: any;
  refresh?: any;
  children?: any;
};

export default ({method, params, refresh, children}: VaultRpcProps) => {
  return (
    <VaultJsonRpcContext.Consumer>
      {({ url }: { url?: string; }) => {
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