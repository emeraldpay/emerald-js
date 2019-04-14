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
import ToggledIconButton from '../../src/components/ToggledIconButton';

import {
  Copytoclipboard as CloneIcon,
  Check1 as CheckCircle
} from '@emeraldplatform/ui-icons';

storiesOf('ToggledIconButton', module)
  .add('default', () => (
    <ToggledIconButton
      onClick={action('onClick')}
      icon={<CloneIcon />}
      toggledIcon={<CheckCircle />}
    />
  ));
