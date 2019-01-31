import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CurrencyUsd = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M28 32a8 8 0 0 1 0-16m8 16a8 8 0 0 1 0 16M32 8v8m0 32v8m-4-24h8m8-12s-4-4-8-4h-8m-8 28s4 4 8 4h8"/>
  </SvgIcon>
);

export default CurrencyUsd;
