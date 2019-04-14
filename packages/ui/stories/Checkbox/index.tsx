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
