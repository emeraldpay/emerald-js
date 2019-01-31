import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Peace = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><path d="M32 8v48m0-24L15.05 48.95m33.92.02L32 32"/>
  </SvgIcon>
);

export default Peace;
