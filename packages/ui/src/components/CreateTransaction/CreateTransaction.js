import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import FormFieldWrapper from './FormFieldWrapper';
import FromField from './FromField';
import TokenField from './TokenField';
import ToField from './ToField';
import AmountField from './AmountField';
import GasLimitField from './GasLimitField';

class CreateTransaction extends React.Component {
  static propTypes = {
    from: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    tokenSymbols: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    addressBookAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
    to: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    gasLimit: PropTypes.string.isRequired,
    txFee: PropTypes.string.isRequired,
    fiatBalance: PropTypes.string.isRequired,
    ownAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onChangeTo: PropTypes.func.isRequired,
    onChangeAmount: PropTypes.func.isRequired,
    onChangeFrom: PropTypes.func.isRequired,
    onChangeGasLimit: PropTypes.func.isRequired,
    onChangeToken: PropTypes.func.isRequired,
    onEmptyAddressBookClick: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.getDisabled = this.getDisabled.bind(this);
  }

  getDisabled() {
    return !this.props.to || !this.props.from || this.props.amount === '';
  }

  render() {
    return (
      <div>
        <FormFieldWrapper>
          <FromField
            onChangeAccount={this.props.onChangeFrom}
            selectedAccount={this.props.from}
            accounts={this.props.ownAddresses}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <TokenField
            onChangeToken={this.props.onChangeToken}
            selectedToken={this.props.token}
            tokenSymbols={this.props.tokenSymbols}
            balance={this.props.balance}
            currency={this.props.currency}
            fiatBalance={this.props.fiatBalance}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <ToField
            onChangeTo={this.props.onChangeTo}
            to={this.props.to}
            addressBookAddresses={this.props.addressBookAddresses}
            onEmptyAddressBookClick={this.props.onEmptyAddressBookClick}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <AmountField
            balance={this.props.balance}
            amount={this.props.amount}
            onChangeAmount={this.props.onChangeAmount}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <GasLimitField
            onChangeGasLimit={this.props.onChangeGasLimit}
            gasLimit={this.props.gasLimit}
            txFee={this.props.txFee}
            token={this.props.token}
            txFeeFiat={this.props.txFeeFiat}
            currency={this.props.currency}
          />
        </FormFieldWrapper>

        <FormFieldWrapper style={{ paddingBottom: '0px' }}>
          <div style={{ flexGrow: 5 }}>
            <Button label="Cancel" onClick={this.props.onCancel} />
            <Button disabled={this.getDisabled()} primary label="Create Transaction" onClick={this.props.onSubmit} />
          </div>
        </FormFieldWrapper>
      </div>
    );
  }
}


export default CreateTransaction;
