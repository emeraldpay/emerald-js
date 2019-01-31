import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FullscreenExpand = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M36 48h12V36M28 16H16v12"/><path d="M8 8h48v48H8zm8 8l12 12m20 20L36 36"/>
  </SvgIcon>
);

export default FullscreenExpand;
