import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const DoorStairs = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M48 48H28v-8h20m0 0H32v-8h16m0 0H36v-8h12M24 56v-8h24"/><path d="M16 8h32v48H16z"/>
  </SvgIcon>
);

export default DoorStairs;
