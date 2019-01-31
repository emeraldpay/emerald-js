import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Close = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 16l32 32m0-32L16 48"/>
  </SvgIcon>
);

export default Close;
