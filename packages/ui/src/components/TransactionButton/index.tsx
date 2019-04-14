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
import Button from '@material-ui/core/Button';
import * as qs from 'qs';

interface Props {
  transaction: any;
  primaryText?: string;
};

interface State {
  transactionLink?: string;
}

export default class TransactionButton extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      transactionLink: this.encodeURI(props.transaction)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.transaction !== this.props.transaction) {
      this.setState({
        transactionLink: this.encodeURI(this.props.transaction)
      });
    }
  }

  encodeURI(obj) {
    return `ethereum:${obj.to}?${qs.stringify(obj)}`;
  }

  render() {
    return (
      <Button href={this.state.transactionLink} variant="contained">
        {this.props.primaryText || 'Send Transaction'}
      </Button>
    );
  }
}
