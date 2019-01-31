import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const NetworkDisconnected = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 8h48v36H8zm4 48h40M40 44v12M24 44v12m-2-40l20 20m0-20L22 36"/>
  </SvgIcon>
);

export default NetworkDisconnected;
