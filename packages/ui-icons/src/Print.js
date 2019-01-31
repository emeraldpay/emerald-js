import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Print = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 32h32v24H16zm8 16h16m-16-8h16M20 16V8h24v8"/><path d="M16 40H8V16h48v24h-8"/>
  </SvgIcon>
);

export default Print;
