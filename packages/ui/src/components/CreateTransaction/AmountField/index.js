import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class AmountField extends React.Component {
  static propTypes = {
    onChangeAmount: PropTypes.func.isRequired,
    amount: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onClickMax = this.onClickMax.bind(this);
    this.state = { errorText: null };
  }

  onChangeAmount(event, amount) {
    this.props.onChangeAmount(amount);

    if (!amount && amount !== 0) {
      this.setState({ errorText: 'Required' });
    } else {
      this.setState({ errorText: null });
    }
  }

  onClickMax() {
    this.props.onChangeAmount(this.props.balance);
  }

  inputStyles = {
    width: '200px',
    marginRight: '10px',
  }

  buttonStyles = {
    height: '30px',
    minWidth: '35px',
    lineHeight: '30px',
  };

  buttonLabelStyles = {
    fontSize: '11px',
  };

  render() {
    return (
      <Fragment>
        <TextField
          label="Amount"
          type="number"
          containerStyle={this.inputStyles}
          min="0"
          max={this.props.balance}
          value={this.props.amount}
          onChange={this.onChangeAmount}
          errorText={this.state.errorText}
        />

        <Button
          style={this.buttonStyles}
          labelStyle={this.buttonLabelStyles}
          primary
          label="MAX"
          onClick={this.onClickMax}
        />
      </Fragment>
    );
  }
}

export default AmountField;
