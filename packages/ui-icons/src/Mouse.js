import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Mouse = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <rect x="16" y="8" width="32" height="48" rx="16" ry="16"/><path d="M32 16v12"/>
  </SvgIcon>
);

export default Mouse;
