import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Umbrella = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 32H8c0-11 10.75-20 24-20s24 9 24 20zM32 52a4 4 0 0 1-8 0m8-20v20m0-44v4"/>
  </SvgIcon>
);

export default Umbrella;
