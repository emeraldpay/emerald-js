import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Pin = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 56l16-16m28-12l4-4-4-4-8-8-4-4-4 4a5.66 5.66 0 0 0 0 8h0l-8 8h0a11.31 11.31 0 0 0-16 0h0l23.94 24.13L36 52a11.36 11.36 0 0 0 0-16h0l8-8h0a5.66 5.66 0 0 0 8 0z"/>
  </SvgIcon>
);

export default Pin;
