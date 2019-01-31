import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Key = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="20" cy="32" r="12"/><path d="M56 44V32H32"/>
  </SvgIcon>
);

export default Key;
