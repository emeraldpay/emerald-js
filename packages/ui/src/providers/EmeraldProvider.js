import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { EthJsonRpcProvider } from './EthJsonRpcProvider';
import { VaultJsonRpcProvider } from './VaultJsonRpcProvider';
import VaultRpc from './VaultRpc';

import theme from '../theme';

export class EmeraldProvider extends React.Component {
  static propTypes = {
    ethUrl: PropTypes.string,
    vaultUrl: PropTypes.string,
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <EthJsonRpcProvider url={this.props.ethUrl}>
          <VaultJsonRpcProvider url={this.props.vaultUrl}>
            {this.props.children}
          </VaultJsonRpcProvider>
        </EthJsonRpcProvider>
      </MuiThemeProvider>
    );
  }
}
