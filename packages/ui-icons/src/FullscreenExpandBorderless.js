import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FullscreenExpandBorderless = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M20 8H8v12M8 8l16 16m32-4V8H44m12 0L40 24m4 32h12V44m0 12L40 40M8 44v12h12M8 56l16-16"/>
  </SvgIcon>
);

export default FullscreenExpandBorderless;
