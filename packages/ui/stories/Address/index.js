import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Address from '../../lib/components/Address';

storiesOf('Address', module)
  .add('default', () => (
    <Address
      onClick={action('onClick')}
      onCopyClick={action('onCopyclick')}
      id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
    />
  ))
  .add('Auto fit container', () => (
    <div style={{ width: '200px' }}>
      <Address
        shortened={true}
        onClick={action('onClick')}
        onCopyClick={action('onCopyclick')}
        id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      />
    </div>
  ))
  .add("Hide copy", () => (
    <Address
      onClick={action('onClick')}
      onCopyClick={action('onCopyclick')}
      id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      hideCopy="true"
      />
  ));
