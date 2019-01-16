import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Crop = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M56 48H16V8" strokeWidth="4" strokeMiterlimit="10"/><path fill="none" stroke="currentColor" d="M8 16h40v40M8 56L56 8" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default Crop;
