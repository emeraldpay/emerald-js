import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Checkmark = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M12 28l16 16 24-24" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default Checkmark;
