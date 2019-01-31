import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Ledger = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 24h16M8 40h48m-16 0v16M24 8v48"/><rect x="8" y="8" width="48" height="48" rx="8" ry="8"/>
  </SvgIcon>
);

export default Ledger;
