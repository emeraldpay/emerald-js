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
