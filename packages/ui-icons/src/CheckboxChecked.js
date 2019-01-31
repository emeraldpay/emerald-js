import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CheckboxChecked = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 8h48v48H8z"/><path d="M20 32l8 8 16-16"/>
  </SvgIcon>
);

export default CheckboxChecked;
