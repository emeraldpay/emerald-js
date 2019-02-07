import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { EthJsonRpcProvider } from './EthJsonRpcProvider';
import { VaultJsonRpcProvider } from './VaultJsonRpcProvider';

import theme from '../theme';

interface Props {
  ethUrl: string;
  vaultUrl: string;
};

export class EmeraldProvider extends React.Component<Props> {
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
