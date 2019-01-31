import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Location = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M12 27.2C12 46.4 32 56 32 56s20-9.6 20-28.8C52 16.6 43 8 32 8s-20 8.6-20 19.2z"/><circle cx="32" cy="26.88" r="6.88"/>
  </SvgIcon>
);

export default Location;
