import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Heart = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M44 12c-8 0-9.91 8-12 8s-4-8-12-8c-6.63 0-12 4-12 12 0 12 20 28 24 28s24-16 24-28c0-8-5.37-12-12-12z"/>
  </SvgIcon>
);

export default Heart;
