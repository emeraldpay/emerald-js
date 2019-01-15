import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

function getStyles(muiTheme) {
  return {
    root: {
      fontFamily: muiTheme.fontFamily,
      color: muiTheme.palette.secondaryTextColor,
      wordSpacing: '3px',
      letterSpacing: '1px',
      fontWeight: '200',
      paddingLeft: '20px',
      fontSize: '14px',
    },
  };
}


class GasLimitField extends React.Component {
  static propTypes = {
    onChangeGasLimit: PropTypes.func.isRequired,
    txFee: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    gasLimit: PropTypes.string.isRequired,
    txFeeFiat: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    muiTheme: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.onChangeGasLimit = this.onChangeGasLimit.bind(this);
  }

  onChangeGasLimit(event, amount) {
    this.props.onChangeGasLimit(amount);
  }

  render() {
    return (
      <Fragment>
        <Typography>Gas Limit</Typography>
          <Input
            type="number"
            value={this.props.gasLimit}
            min="21000"
            onChange={this.onChangeGasLimit}
          />
          <div className={this.props.classes.root}>{this.props.txFee} ETC   /   {this.props.txFeeFiat} {this.props.currency}</div>
      </Fragment>
    );
  }
}

export default withStyles(getStyles)(GasLimitField);
