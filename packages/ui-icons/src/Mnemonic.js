import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Mnemonic = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 16l8-8 8 8 8-8 8 8 8-8 8 8M8 36l8-8 8 8 8-8 8 8 8-8 8 8M8 56l8-8 8 8 8-8 8 8 8-8 8 8"/>
  </SvgIcon>
);

export default Mnemonic;
