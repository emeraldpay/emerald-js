import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Switch = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M48 12l8 8-8 8m0 8l8 8-8 8"/><path d="M56 20H40c-12 0-12 24-24 24H8"/><path d="M8 20h8c12 0 12 24 24 24h16"/>
  </SvgIcon>
);

export default Switch;
