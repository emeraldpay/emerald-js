import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BoxContainer = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 8h32l8 16v32H8V24l8-16zM8 24h48"/>
  </SvgIcon>
);

export default BoxContainer;
