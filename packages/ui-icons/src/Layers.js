import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Layers = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 24L32 36 8 24l24-12 24 12z"/><path d="M40 32l16 8-24 12L8 40l16-8"/>
  </SvgIcon>
);

export default Layers;
