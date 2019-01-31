import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const DoorEnter = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 20V8h32v48H16V44"/><path d="M28 40l8-8-8-8M8 32h28"/>
  </SvgIcon>
);

export default DoorEnter;
