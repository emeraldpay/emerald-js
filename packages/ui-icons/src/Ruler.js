import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Ruler = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 40L40 8l16 16-32 31.999zM16 32l4 4m4-12l4 4m4-12l4 4"/>
  </SvgIcon>
);

export default Ruler;
