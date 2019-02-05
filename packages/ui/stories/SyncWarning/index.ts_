import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SyncWarning from '../../src/components/SyncWarning';

storiesOf('SyncWarning', module)
  .add('default', () => (<SyncWarning />))
  .add('with status', () => (<SyncWarning startingBlock={1} currentBlock={2} highestBlock={9000} />));
