import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Qrcode = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 56H8v-8m48 0v8h-8m0-48h8v8M8 16V8h8m0 8h32v32H16z"/><path d="M24 24h16v16H24z"/>
  </SvgIcon>
);

export default Qrcode;
