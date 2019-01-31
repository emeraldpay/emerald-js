import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Sliders = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 8v48M48 8v48M32 8v48M8 48h16m0-28h16m0 20h16"/>
  </SvgIcon>
);

export default Sliders;
