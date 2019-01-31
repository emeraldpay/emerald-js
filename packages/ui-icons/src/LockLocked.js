import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const LockLocked = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <rect x="12" y="28" width="40" height="28" rx="4" ry="4"/><path d="M32 48V36m-12-8v-8a12 12 0 0 1 24 0v8"/>
  </SvgIcon>
);

export default LockLocked;
