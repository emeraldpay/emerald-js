import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import AccountSelect from '../../src/components/AccountSelect';

storiesOf('AccountSelect', module)
  .add('default', () => (
    <AccountSelect accounts={['0x123', '0x456']}/>
  ))
  .add('with selected', () => (
    <AccountSelect accounts={['0x123', '0x456', '0x888']} selectedAccount={'0x888'}/>
  ));
