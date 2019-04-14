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
