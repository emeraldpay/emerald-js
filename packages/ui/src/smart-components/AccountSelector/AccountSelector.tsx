import * as React from 'react';
import AccountSelect from '../../components/AccountSelect';
import VaultRpc from '../../providers/VaultRpc';

interface Props {
  onChange?: any;
  account?: string;
};

class AccountSelector extends React.Component<Props> {
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