import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Display = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <rect x="8" y="8" width="48" height="36" rx="4" ry="4"/><path d="M16 56h32M28 44l-4 12m12-12l4 12M8 36h48"/>
  </SvgIcon>
);

export default Display;
