import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CloseBoxed = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M20 20l24 24M44 20L20 44M8 8h48v48H8z" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default CloseBoxed;
