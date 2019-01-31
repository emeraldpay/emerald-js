import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const TargetCross = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><path d="M32 8v8m0 32v8m24-24h-8M8 32h8"/>
  </SvgIcon>
);

export default TargetCross;
