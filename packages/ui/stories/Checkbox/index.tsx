import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from '../../src/components/Checkbox';

storiesOf('Checkbox', module)
  .add('default', () => (<Checkbox />))
  .add('default labeled', () => (<Checkbox label="Label Text" />))
  .add('default disabled with label', () => (<Checkbox disabled label="checked label"/>))
  .add('checked labeled', () => (<Checkbox checked label="Checked labeled" />))
  .add('checked disabled', () => (<Checkbox checked disabled />))
  .add('checked disabled with label', () => (<Checkbox checked disabled label="checked label"/>))
  .add('with onCheck handler', () => (<Checkbox onCheck={action('check-click')} />))
  .add('disabled', () => (<Checkbox disabled />));
