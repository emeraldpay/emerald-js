import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Disk = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/><circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/><path fill="none" stroke="currentColor" d="M38 32h18M8 32h18.01M48.97 15.03L36.21 27.79M27.76 36.24L15.03 48.97" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default Disk;
