import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FullscreenShrinkBorderless = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M52 40H40v12m0-12l16 16m-32-4V40H12m12 0L8 56m4-32h12V12m0 12L8 8m32 4v12h12m-12 0L56 8"/>
  </SvgIcon>
);

export default FullscreenShrinkBorderless;
