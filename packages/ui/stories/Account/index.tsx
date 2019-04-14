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
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Account from '../../src/components/Account';

storiesOf('Account', module)
  .add('default', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
    />
  ))
  .add('editable', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
      editable
    />
  ))
  .add('with empty name', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name=""
      identity
    />
  ))
  .add('without Name', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
    />
  ))
  .add('with onClick handler', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      onClick={action('address-click')}
    />
  ))
  .add('Identity Icon', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      identity
    />
  ))
  .add('Identity Icon with name', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
      identity
    />
  ))
  .add('Identity Icon with editable name', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      editable
      name="account1"
      identity
    />
  ))
  .add('Shortened', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      identity
      addressWidth="200px"
    />
  ));
