import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Close = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M16 16l32 32M48 16L16 48" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default Close;
