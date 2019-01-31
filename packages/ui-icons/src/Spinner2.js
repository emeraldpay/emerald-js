import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Spinner2 = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 8v12m0 36V44m24-12H44M8 32h12m28.97-16.97l-8.48 8.48M15.03 48.97l8.48-8.48m25.46 8.48l-8.48-8.48M15.03 15.03l8.48 8.48"/>
  </SvgIcon>
);

export default Spinner2;
