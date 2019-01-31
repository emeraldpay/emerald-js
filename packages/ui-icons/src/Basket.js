import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Basket = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 48V32m12 16V32M20 48V32M8 24l4 32h40l4-32zm8 0l4-16m28 16L44 8"/>
  </SvgIcon>
);

export default Basket;
