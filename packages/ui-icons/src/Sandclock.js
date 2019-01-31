import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Sandclock = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M46 8v8c0 8.84-6.27 16-14 16h0c-7.73 0-14-7.16-14-16V8m-6 0h40M18 56v-8c0-8.84 6.27-16 14-16h0c7.73 0 14 7.16 14 16v8m6 0H12"/>
  </SvgIcon>
);

export default Sandclock;
