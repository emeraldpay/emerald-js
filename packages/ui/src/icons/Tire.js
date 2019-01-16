import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Tire = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/><circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/><path fill="none" stroke="currentColor" d="M40 24h16M40 40h16M40 40v16M24 40v16M24 40H8M24 24H8M24 24V8M40 24V8" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default Tire;
