import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BatteryEmpty = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M48 24v-8H8v32h40v-8h8V24h-8z" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default BatteryEmpty;
