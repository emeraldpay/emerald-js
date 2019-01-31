import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const PlayVideo = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <rect x="8" y="12" width="48" height="40" rx="11.96" ry="11.96"/><path d="M28 40l8-8-8-8"/>
  </SvgIcon>
);

export default PlayVideo;
