import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Magnet = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 8H40v24a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8V8H8v24c0 13.255 10.745 24 24 24h0c13.255 0 24-10.745 24-24V8zm0 12H40m-16 0H8"/>
  </SvgIcon>
);

export default Magnet;
