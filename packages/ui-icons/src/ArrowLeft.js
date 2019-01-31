import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ArrowLeft = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M20 24l-8 8 8 8m32-8H12"/>
  </SvgIcon>
);

export default ArrowLeft;
