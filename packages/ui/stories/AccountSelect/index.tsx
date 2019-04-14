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
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import AccountSelect from '../../src/components/AccountSelect';

storiesOf('AccountSelect', module)
  .add('default', () => (
    <AccountSelect accounts={['0x123', '0x456']}/>
  ))
  .add('without list', () => (
    <AccountSelect />
  ))
  .add('with selected', () => (
    <AccountSelect accounts={['0x6F50C6Bff08Ec925232937B204B0ae23C488402a', '0x456', '0x888']} selectedAccount={'0x888'}/>
  ));
