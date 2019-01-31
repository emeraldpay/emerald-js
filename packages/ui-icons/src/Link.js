import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Link = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M28 44h-8A12 12 0 0 1 8 32h0a12 12 0 0 1 12-12h8m8 0h8a12 12 0 0 1 12 12h0a12 12 0 0 1-12 12h-8M20 32h24"/>
  </SvgIcon>
);

export default Link;
