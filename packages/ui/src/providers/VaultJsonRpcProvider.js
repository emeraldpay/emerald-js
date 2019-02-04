import React from 'react';
import PropTypes from 'prop-types';
import { HttpTransport, EthRpc, JsonRpc } from '@emeraldplatform/emerald-js';

export const VaultJsonRpcContext = React.createContext();

export class VaultJsonRpcProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: props.url || 'http://127.0.0.1:1920',
      changeUrl: url => {
        this.setState({
          ...this.state,
          url
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        ...this.state,
        url: this.props.url
      })
    }
  }
  render() {
    return (
      <VaultJsonRpcContext.Provider value={this.state}>
        {this.props.children}
      </VaultJsonRpcContext.Provider>
    );
  }
}

export default VaultJsonRpcProvider;