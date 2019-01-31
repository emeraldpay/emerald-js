import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Code = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 48L8 32l8-16m32 32l8-16-8-16M36 8l-8 48"/>
  </SvgIcon>
);

export default Code;
