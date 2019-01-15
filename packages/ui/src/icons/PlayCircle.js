import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const PlayCircle = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/><path fill="none" stroke="currentColor" d="M28 40l8-8-8-8" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default PlayCircle;
