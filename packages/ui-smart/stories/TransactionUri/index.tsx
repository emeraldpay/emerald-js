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
import Typography from '@material-ui/core/Typography';
import TransactionUri from '../../src/providers/TransactionUri';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';


const abiFixture = [
  {
    "inputs": [
      {
        "name": "todoText",
        "type": "bytes32"
      }
    ],
    "name": "addTodo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]


storiesOf('TransactionUri', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <div>
      <TransactionUri
        to={text('to', '0x00')}
        from={text('from', '0x00')}
        value={number('value', 1000000000000000000)}
        gas={number('gas', 420000)}>
        {transactionUri => (
          <React.Fragment>
            <Typography>transactionUri: {transactionUri}</Typography>
            <a href={transactionUri}>{transactionUri}</a>
          </React.Fragment>
        )}
      </TransactionUri>
    </div>
  ))
  .addWithJSX('contract method call transaction', () => (
    <div>
      <TransactionUri
        abi={abiFixture}
        to={text('to', '0x00')}
        from={text('from', '0x00')}
        value={number('value', 1000000000000000000)}
        gas={number('gas', 420000)}
        method={text('method', 'addTodo')}
        params={[{
          name: text('params.name', 'todoText'),
          value: text('params.value', 'foobar')
        }]}>
        {transactionUri => (
          <React.Fragment>
            <Typography>transactionUri: {transactionUri}</Typography>
            <a href={transactionUri}>{transactionUri}</a>
          </React.Fragment>
        )}
      </TransactionUri>
    </div>
  ));