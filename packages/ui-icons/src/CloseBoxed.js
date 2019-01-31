import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CloseBoxed = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M20 20l24 24m0-24L20 44M8 8h48v48H8z"/>
  </SvgIcon>
);

export default CloseBoxed;
