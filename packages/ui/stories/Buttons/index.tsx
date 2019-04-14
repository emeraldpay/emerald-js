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

import Button from '@material-ui/core/Button';

import TransactionButton from '../../src/components/TransactionButton';


storiesOf('Buttons', module)
  .add('Default', () => (
    <React.Fragment>
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
    </React.Fragment>
  ))

  .add('Contained', () => (
    <React.Fragment>
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
    </React.Fragment>
  ))

  .add('Transaction', () => (
    <React.Fragment>
      <TransactionButton transaction={{ to: '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8', from: '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8', value: 150, gas: 21000 }} />
    </React.Fragment>
  ));
