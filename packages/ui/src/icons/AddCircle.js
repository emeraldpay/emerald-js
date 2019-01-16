import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const AddCircle = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/><path fill="none" stroke="currentColor" d="M20 32h24M32 20v24" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default AddCircle;
