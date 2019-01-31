import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CircleSplitCross = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><path d="M15.03 48.97l33.93-33.93m-33.93 0l33.93 33.93"/>
  </SvgIcon>
);

export default CircleSplitCross;
