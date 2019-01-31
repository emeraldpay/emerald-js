import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BatteryEmpty = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M48 24v-8H8v32h40v-8h8V24h-8z"/>
  </SvgIcon>
);

export default BatteryEmpty;
