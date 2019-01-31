import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Spinner1 as Spinner } from '@emeraldplatform/ui-icons';
import Typography from '@material-ui/core/Typography';

const getStyles = (theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#F9F2F2',
    minHeight: '35px',
    // opacity: '0.5',
    display: 'flex',
    zIndex: '-1',
    alignItems: 'center',
    paddingLeft: '5px',
    paddingTop: '5px',
  },
  errorText: {
    color: theme.palette.error.light,
  },
  text: {
    color: '#CF3B3B',
    zIndex: '1',
    marginLeft: '5px',
  },
});


class SyncWarning extends React.Component {
  static propTypes = {
    startingBlock: PropTypes.number.isRequired,
    currentBlock: PropTypes.number.isRequired,
    highestBlock: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
  };
  static defaultProps = {};

  constructor() {
    super();
    this.getProgress = this.getProgress.bind(this);
  }

  shouldComponentUpdate({ currentBlock, highestBlock }) {
    return currentBlock && highestBlock && (highestBlock - currentBlock >= 20);
  }

  getProgress() {
    const { startingBlock, currentBlock, highestBlock, classes } = this.props;

    if (startingBlock && currentBlock && highestBlock) {
      return `About ${highestBlock - currentBlock} blocks left.`
    } else {
      return '';
    }
  }

  render() {
    const { startingblock, currentblock, highestblock, classes } = this.props;

    return (
      <div className={classes.container}>
        <div>
          <Spinner className={classes.text.color} />
        </div>
        <Typography color="error">
          You are currently syncing. Balances may be incorrect until complete. {this.getProgress()}

        </Typography>
      </div>
    );
  }
};

export default withStyles(getStyles)(SyncWarning);
