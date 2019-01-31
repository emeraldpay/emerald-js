import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Disk = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><circle cx="32" cy="32" r="6"/><path d="M38 32h18M8 32h18.01m22.96-16.97L36.21 27.79m-8.45 8.45L15.03 48.97"/>
  </SvgIcon>
);

export default Disk;
