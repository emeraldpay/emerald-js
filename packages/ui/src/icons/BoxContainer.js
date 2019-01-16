import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BoxContainer = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M16 8h32l8 16v32H8V24l8-16zM8 24h48" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default BoxContainer;
