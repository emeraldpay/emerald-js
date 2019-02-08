import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Button from '@material-ui/core/Button';

import { TransactionButton } from '../../lib';


storiesOf('Buttons', module)
  .add('Default', () => (
    <Fragment>
      <div>
        <h1>Primary Colors</h1>
        <Button>Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
      <div>
        <h1>Secondary Colors</h1>
        <Button color="secondary">Button</Button>
        <Button color="secondary" disabled>Disabled Button</Button>
      </div>
    </Fragment>
  ))

  .add('Contained', () => (
    <Fragment>
      <div>
        <h1>Primary Colors</h1>
        <Button variant="contained">Button</Button>
        <Button variant="contained" disabled>Disabled Button</Button>
      </div>
      <div>
        <h1>Secondary Colors</h1>
        <Button variant="contained" color="secondary">Button</Button>
        <Button variant="contained" color="secondary" disabled>Disabled Button</Button>
      </div>
    </Fragment>
  ))

  .add('Transaction', () => (
    <Fragment>
      <TransactionButton transaction={{ to: '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8', from: '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8', value: 150, gas: 21000 }} />
    </Fragment>
  ));
