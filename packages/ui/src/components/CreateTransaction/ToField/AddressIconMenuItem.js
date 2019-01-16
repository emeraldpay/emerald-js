import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import Account from '../../Account/';

class AddressIconMenuItem extends React.Component {
  static muiName = 'MenuItem';
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    address: PropTypes.string.isRequired,
  };

  constructor(...props) {
    super(...props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onChange(this.props.address);
  }

  render() {
    return (
      <MenuItem
        onClick={this.onClick}
        style={{
 paddingBottom: '5px', paddingTop: '5px', minHeight: 'auto', height: 'auto',
}}
        primaryText={
          <Account identityProps={{ size: 30 }} addr={this.props.address} identity hideCopy />
        }
      />
    );
  }
}

export default AddressIconMenuItem;
