import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const DropdownArrowDown = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M48 24L32 40 16 24"/>
  </SvgIcon>
);

export default DropdownArrowDown;
