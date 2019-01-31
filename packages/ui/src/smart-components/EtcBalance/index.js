import React from 'react';
import Typography from '@material-ui/core/Typography';
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

class EtcBalance extends React.Component {
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

export default withStyles(styles, { name: 'EmeraldEtcBalance' })(EtcBalance);