import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BarChart = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 56H8V36m12-16v36m12-24v24M44 8v48"/>
  </SvgIcon>
);

export default BarChart;
