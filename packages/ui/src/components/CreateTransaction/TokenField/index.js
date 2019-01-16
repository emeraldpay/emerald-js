import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

function getStyles(muiTheme) {
  return {
    root: {
      fontFamily: muiTheme.fontFamily,
      color: muiTheme.palette.secondaryTextColor,
      wordSpacing: '3px',
      letterSpacing: '1px',
      fontWeight: '200',
      paddingLeft: '20px',
    },
  };
}

class TokenField extends React.Component {
  static propTypes = {
    onChangeToken: PropTypes.func.isRequired,
    selectedToken: PropTypes.string.isRequired,
    tokenSymbols: PropTypes.arrayOf(PropTypes.string).isRequired,
    balance: PropTypes.string.isRequired,
    fiatBalance: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.onChangeToken = this.onChangeToken.bind(this);
  }

  onChangeToken(event, value) {
    this.props.onChangeToken(this.props.tokenSymbols[value]);
  }

  render() {
    return (
      <Fragment>
        <Typography>Token</Typography>

          <Select value={this.props.selectedToken} onChange={this.onChangeToken}>
            {this.props.tokenSymbols.map(toke =>
              (
                <div>foo{toke}</div>
              ))}
          </Select>

          <div className={this.props.classes.root}>
            {this.props.balance} {this.props.selectedToken}   /   {this.props.fiatBalance} {this.props.currency}
          </div>
      </Fragment>
    );
  }
}

export default withStyles(getStyles)(TokenField);
