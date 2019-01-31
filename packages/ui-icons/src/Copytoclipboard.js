import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Copytoclipboard = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24 40H8V8h32v16"/><path d="M24 24h32v32H24z"/>
  </SvgIcon>
);

export default Copytoclipboard;
