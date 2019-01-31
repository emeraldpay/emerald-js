import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FullscreenShrink = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M48 36H36v12"/><path d="M8 8h48v48H8zm28 28l12 12"/><path d="M16 28h12V16m0 12L16 16"/>
  </SvgIcon>
);

export default FullscreenShrink;
