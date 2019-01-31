import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const PieChart = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><path d="M32 8v24m24 0H32M15.03 48.97L32 32"/>
  </SvgIcon>
);

export default PieChart;
