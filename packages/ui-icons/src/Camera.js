import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Camera = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <rect x="8" y="20" width="48" height="36" rx="4" ry="4"/><path d="M16 20l4-12h24l4 12"/><circle cx="32" cy="38" r="10"/>
  </SvgIcon>
);

export default Camera;
