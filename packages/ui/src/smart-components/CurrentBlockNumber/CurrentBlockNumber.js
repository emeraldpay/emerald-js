import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Block as BlockIcon } from '@emeraldplatform/ui-icons';
import EthRpc from '../../providers/EthRpc';

const styles = theme => ({
  root: {},
  icon: {
    marginRight: theme.spacing.unit
  }
});

class CurrentBlockNumber extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <EthRpc method="eth.getBlockNumber">
        {blockNumber => (
          <React.Fragment>
            <BlockIcon className={classes.icon} /> {blockNumber}
          </React.Fragment>
        )}
      </EthRpc>
    )
  }
}


export default withStyles(styles, { name: 'EmeraldCurrentBlockNumber' })(CurrentBlockNumber);