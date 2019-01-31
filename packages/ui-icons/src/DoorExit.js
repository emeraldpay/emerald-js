import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const DoorExit = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M40 44v12H8V8h32v12m8 20l8-8-8-8m-20 8h28"/>
  </SvgIcon>
);

export default DoorExit;
