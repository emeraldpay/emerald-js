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
import CssBaseline from '@material-ui/core/CssBaseline';
import {Theme} from '@emeraldplatform/ui';
import { EthJsonRpcProvider } from './EthJsonRpcProvider';
import { VaultJsonRpcProvider } from './VaultJsonRpcProvider';

import {ThemeProvider} from '@material-ui/styles';

interface Props {
  ethUrl: string;
  vaultUrl: string;
}

export class EmeraldProvider extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={Theme}>
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
