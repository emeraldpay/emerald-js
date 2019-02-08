import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from '../../lib/components/AppBar';
import CurrentBlockNumber from '../../lib/smart-components/CurrentBlockNumber';
import NetworkSelector from '../../lib/smart-components/NetworkSelector';
import AccountSelector from '../../lib/smart-components/AccountSelector';
import EtcBalance from '../../lib/smart-components/EtcBalance';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';


storiesOf('AppBar', module)
  .addDecorator(withKnobs)
  .addWithJSX('AppBar', () => {
    class AppBarApp extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          account: null,
          changeAccount: account => {
            this.setState({
              ...this.state,
              account
            });
          }
        }
      }
      render() {
        return (
          <AppBar title={text('title', 'Emerald')} subtitle={text('subtitle', 'AppBar')}>
            <NetworkSelector />
            <CurrentBlockNumber />
            <AccountSelector account={this.state.account} onChange={this.state.changeAccount}/>
            <EtcBalance account={this.state.account}/>
          </AppBar>
        )
      }
    }
    return <AppBarApp />;
  });
