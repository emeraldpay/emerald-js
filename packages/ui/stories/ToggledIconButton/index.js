import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToggledIconButton from '../../lib/components/ToggledIconButton';

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
