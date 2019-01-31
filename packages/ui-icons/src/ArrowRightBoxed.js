import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ArrowRightBoxed = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M28 40l8-8-8-8"/><path d="M8 8h48v48H8z"/>
  </SvgIcon>
);

export default ArrowRightBoxed;
