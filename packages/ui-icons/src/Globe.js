import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Globe = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M52 19.17a39.81 39.81 0 0 1-20 5.33 39.81 39.81 0 0 1-20-5.33m0 25.71a40 40 0 0 1 39.92 0M29 56a40 40 0 0 1 0-48m6 0a40 40 0 0 1 0 48"/><circle cx="32" cy="32" r="24"/>
  </SvgIcon>
);

export default Globe;
