import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Flag = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M16 32h32L36 20 48 8H16v48" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default Flag;
