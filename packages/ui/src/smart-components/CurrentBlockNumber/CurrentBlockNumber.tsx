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
import { Block as BlockIcon } from '@emeraldplatform/ui-icons';
import EthRpc from '../../providers/EthRpc';

const styles = theme => ({
  root: {},
  icon: {
    marginRight: theme.spacing.unit
  }
});

interface Props {
  classes: any;
};

class CurrentBlockNumber extends React.Component<Props> {
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