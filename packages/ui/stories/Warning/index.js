import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Warning, WarningHeader, WarningText } from '../../lib/components/Warning';

storiesOf('Warning', module)
  .add('default', () => (
    <div>
      <Warning>
        <WarningHeader>Attention</WarningHeader>
        <WarningText>This is warning message</WarningText>
        <WarningText>Second message</WarningText>
      </Warning>
      <br />
      <Warning fullWidth>
        <WarningHeader>Full width Attention</WarningHeader>
        <WarningText>This is warning message</WarningText>
      </Warning>

    </div>));
