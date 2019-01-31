import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Cart = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 20h40l-4 24H16V8H8"/><circle cx="20" cy="52" r="4"/><circle cx="48" cy="52" r="4"/>
  </SvgIcon>
);

export default Cart;
