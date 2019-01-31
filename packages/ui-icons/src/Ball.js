import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Ball = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M46 51.49a24 24 0 0 1 0-39m-28 .02a24 24 0 0 1 0 39M8 32h48"/><circle cx="32" cy="32" r="24"/>
  </SvgIcon>
);

export default Ball;
