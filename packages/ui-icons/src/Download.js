import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Download = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 40h48v16H8zm16-16l8 8 8-8M32 8v24M16 48h4m4 0h4"/>
  </SvgIcon>
);

export default Download;
