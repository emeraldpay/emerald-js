import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Spinner1 as Spinner } from '@emeraldplatform/ui-icons';
import Typography from '@material-ui/core/Typography';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const getStyles = (theme? : any) => ({
  container: {
    width: '100%',
    backgroundColor: '#F9F2F2',
    minHeight: '35px',
    // opacity: '0.5',
    display: 'flex',
    zIndex: -1,
    alignItems: 'center',
    paddingLeft: '5px',
    paddingTop: '5px',
  } as CSSProperties,
  errorText: {
    color: theme.palette.error.light,
  },
  text: {
    color: '#CF3B3B',
    zIndex: 1,
    marginLeft: '5px',
  } as CSSProperties,
});

interface Props {
  startingBlock: number;
  currentBlock: number;
  highestBlock: number;
  classes: any;
};

class SyncWarning extends React.Component<Props> {
  static defaultProps = {};

  constructor(props) {
    super(props);
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
    const { classes } = this.props;

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
