import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Menu = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 32h32M16 20h32M16 44h32"/>
  </SvgIcon>
);

export default Menu;
