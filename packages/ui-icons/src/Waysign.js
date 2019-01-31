import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Waysign = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M28 32v24m16-24H8V8h36l12 12-12 12z"/>
  </SvgIcon>
);

export default Waysign;
