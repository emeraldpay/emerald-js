import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const LinkBroken = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24 44h-4A12 12 0 0 1 8 32h0a12 12 0 0 1 12-12h4m16 0h4a12 12 0 0 1 12 12h0a12 12 0 0 1-12 12h-4m-8-28v32"/>
  </SvgIcon>
);

export default LinkBroken;
