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
import { withStyles } from '@material-ui/core/styles';
import { EtcSimple } from '@emeraldplatform/ui-icons';
import EthRpc from '../../providers/EthRpc';
import { Wei } from '@emeraldplatform/eth';

const styles = theme => ({
  root: {},
  icon: {
    marginRight: theme.spacing.unit
  }
});

interface Props {
    account?: any;
    classes: any;
};

class Balance extends React.Component<Props> {
  render() {
    const { account, classes } = this.props;
    if (!account) {
      return null;
    }
    return (
      <EthRpc method="eth.getBalance" params={[account]}>
        {balance => (
          <React.Fragment>
            <EtcSimple className={classes.icon}/> {new Wei(balance).getEther()} 
          </React.Fragment>
        )}
      </EthRpc>
    );
  }
}

export default withStyles(styles, { name: 'EmeraldBalance' })(Balance);