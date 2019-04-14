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
import Address from '../../src/components/Address';

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
