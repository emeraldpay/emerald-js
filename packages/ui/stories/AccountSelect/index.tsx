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
