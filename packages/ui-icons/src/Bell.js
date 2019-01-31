import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Bell = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M12 44s8 4 20 4 20-4 20-4c-4-20-4-32-20-32S16 24 12 44zm12 4a8 8 0 0 0 16 0M32 8v4"/>
  </SvgIcon>
);

export default Bell;
