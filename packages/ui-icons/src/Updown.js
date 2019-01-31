import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Updown = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24 44l8 8 8-8m0-24l-8-8-8 8m8 32V12"/>
  </SvgIcon>
);

export default Updown;
