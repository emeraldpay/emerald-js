import React from 'react';
import PropTypes from 'prop-types';
import AccountSelect from '../../components/AccountSelect';
import VaultRpc from '../../providers/VaultRpc';

class AccountSelector extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    account: PropTypes.string,
  }
  render() {
    const { onChange, account } = this.props;
    return (
      <VaultRpc method="listAccounts">
        {accounts => {
           const flattenedAccounts = accounts.map((a) => a.address);
           return (<AccountSelect accounts={flattenedAccounts} selectedAccount={account} onChange={onChange}/>)
        }}
      </VaultRpc>
    )
  }
}

export default AccountSelector;