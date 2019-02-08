import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Page from '../../src/components/Page';
// import { Back } from '@emeraldplatform/ui-icons';
import { ArrowBack } from '@material-ui/icons';

storiesOf('Page', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <Page title={text('title', 'Title Here')} leftIcon={<ArrowBack />}>
        <Typography>Im a page content supsup</Typography>
      </Page>
    </div>
  ));
