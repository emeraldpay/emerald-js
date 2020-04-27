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
import { Spinner1 as Spinner } from '@emeraldplatform/ui-icons';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const getStyles = (theme?: any) => createStyles({
  container: {
    width: '100%',
    backgroundColor: '#F9F2F2',
    minHeight: '35px',
    // opacity: '0.5',
    display: 'flex',
    zIndex: -1,
    alignItems: 'center',
    paddingLeft: '5px',
    paddingTop: '5px'
  },
  errorText: {
    color: theme.palette.error.light
  },
  text: {
    color: '#CF3B3B',
    zIndex: 1,
    marginLeft: '5px'
  }
});

interface ISyncWarningProps {
  startingBlock: number;
  currentBlock: number;
  highestBlock: number;
  classes: any;
}

class SyncWarning extends React.Component<ISyncWarningProps> {
  public static defaultProps = {};

  constructor (props) {
    super(props);
    this.getProgress = this.getProgress.bind(this);
  }

  public shouldComponentUpdate ({ currentBlock, highestBlock }) {
    return currentBlock && highestBlock && (highestBlock - currentBlock >= 20);
  }

  public getProgress () {
    const { startingBlock, currentBlock, highestBlock } = this.props;

    if (startingBlock && currentBlock && highestBlock) {
      return `About ${highestBlock - currentBlock} blocks left.`;
    } else {
      return '';
    }
  }

  public render () {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div>
          <Spinner className={classes.text.color} />
        </div>
        <Typography color='error'>
          You are currently syncing. Balances may be incorrect until complete. {this.getProgress()}

        </Typography>
      </div>
    );
  }
}

export default withStyles(getStyles)(SyncWarning);
