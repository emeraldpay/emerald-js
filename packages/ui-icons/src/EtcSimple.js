import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EtcSimple = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 56L16 32 32 8l16 24-16 24zM16 32h32"/>
  </SvgIcon>
);

export default EtcSimple;
