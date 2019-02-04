
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IdentityIcon from '../../lib/components/IdentityIcon';

const addr = '0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98';
storiesOf('IdentityIcon', module)
  .add('default', () => (
    <div style={{width: '40px', height: '40px'}}>
      <IdentityIcon id={addr.toLowerCase()} />
    </div>))
  .add('with onClick handler', () => {
    return (
      <div style={{ width: '40px', height: '40px' }}>
        <IdentityIcon id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" onClick={action('icon-click')} />
      </div>
    )
  });
