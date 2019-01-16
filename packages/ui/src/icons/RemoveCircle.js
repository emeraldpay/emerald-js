import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const RemoveCircle = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/><path fill="none" stroke="currentColor" d="M20 32h24" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default RemoveCircle;
