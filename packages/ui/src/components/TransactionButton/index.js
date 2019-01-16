import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import * as qs from 'qs';

export default class TransactionButton extends React.Component {
  static propTypes = {
    transaction: PropTypes.object,
  };

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
      <Button primaryText={this.props.primaryText || 'Send Transaction'} href={this.state.transactionLink} variant="contained" />
    );
  }
}
