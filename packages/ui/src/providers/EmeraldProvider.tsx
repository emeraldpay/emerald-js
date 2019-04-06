import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { EthJsonRpcProvider } from './EthJsonRpcProvider';
import { VaultJsonRpcProvider } from './VaultJsonRpcProvider';

import theme from '../theme';
import {ThemeProvider} from '@material-ui/styles';

interface Props {
  ethUrl: string;
  vaultUrl: string;
};

export class EmeraldProvider extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <EthJsonRpcProvider url={this.props.ethUrl}>
          <VaultJsonRpcProvider url={this.props.vaultUrl}>
            {this.props.children}
          </VaultJsonRpcProvider>
        </EthJsonRpcProvider>
      </ThemeProvider>
    );
  }
}
