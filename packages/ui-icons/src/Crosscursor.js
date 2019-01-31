import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Crosscursor = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 8v48m24-24H8m32-16l-8-8-8 8m0 32l8 8 8-8m8-8l8-8-8-8m-32 0l-8 8 8 8"/>
  </SvgIcon>
);

export default Crosscursor;
