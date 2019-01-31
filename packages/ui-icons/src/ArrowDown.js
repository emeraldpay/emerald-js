import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ArrowDown = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24 44l8 8 8-8m-8-32v40"/>
  </SvgIcon>
);

export default ArrowDown;
