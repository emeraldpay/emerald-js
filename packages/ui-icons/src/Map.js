import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Map = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24 56l16-4 16 4V12L40 8l-16 4L8 8v44l16 4zm0-44v44M40 8v44"/>
  </SvgIcon>
);

export default Map;
