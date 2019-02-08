import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { EtcSimple } from '@emeraldplatform/ui-icons';
import EthRpc from '../../providers/EthRpc';
import { Wei } from '@emeraldplatform/emerald-js';

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