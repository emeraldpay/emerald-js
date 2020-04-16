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
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Account from '../../src/components/Account';

storiesOf('Account', module)
  .add('default', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      name='account1'
    />
  ))
  .add('editable', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      name='account1'
      editable={true}
    />
  ))
  .add('with empty name', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      name=''
      identity={true}
    />
  ))
  .add('without Name', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
    />
  ))
  .add('with onClick handler', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      onClick={action('address-click')}
    />
  ))
  .add('Identity Icon', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      identity={true}
    />
  ))
  .add('Identity Icon with name', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      name='account1'
      identity={true}
    />
  ))
  .add('Identity Icon with editable name', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      editable={true}
      name='account1'
      identity={true}
    />
  ))
  .add('Shortened', () => (
    <Account
      address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
      identity={true}
      addressWidth='200px'
    />
  ))
  .add('Same identity icon w/o 0x prefix', () => (
    <React.Fragment>
      <Account
        identity={true}
        address='0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
        name='account1'
      />
      <Account
        identity={true}
        address='FBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
        name='account1'
      />
    </React.Fragment>
  ));
