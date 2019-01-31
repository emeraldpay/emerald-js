import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const TargetCrossSmall = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="16"/><path d="M32 8v16m0 16v16m24-24H40M8 32h16"/>
  </SvgIcon>
);

export default TargetCrossSmall;
