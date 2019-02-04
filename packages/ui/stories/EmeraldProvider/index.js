import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Typography, Divider } from '@material-ui/core';
import { EmeraldProvider } from '../../lib/providers/EmeraldProvider';
import { EthJsonRpcContext } from '../../lib/providers/EthJsonRpcProvider';

storiesOf('EmeraldProvider', module)
  .add('default', () => (
    <EmeraldProvider>
      <Typography>Theme applied</Typography>

      <EthJsonRpcContext.Consumer>
        {({ url, changeUrl }) => {
           return (
             <div style={{ width: '300px', height: '300px' }}>
               <Typography>HttpTransportProvider Settings</Typography>

               <Divider />

               <Typography>{JSON.stringify(url)}</Typography>

               <Divider />

               <Button onClick={() => changeUrl('localhost:8545')}>Change to localhost</Button>
             </div>
           );
        }}
      </EthJsonRpcContext.Consumer>
    </EmeraldProvider>
  ));
