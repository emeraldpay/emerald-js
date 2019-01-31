import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Recorder = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="16" cy="32" r="8"/><circle cx="48" cy="32" r="8"/><path d="M16 40h32"/>
  </SvgIcon>
);

export default Recorder;
