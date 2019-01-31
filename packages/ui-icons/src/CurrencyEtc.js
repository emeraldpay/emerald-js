import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CurrencyEtc = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 56L16 32 32 8l16 24-16 24z"/><path d="M16 32l16-8 16 8m-32 0l16 8 16-8"/>
  </SvgIcon>
);

export default CurrencyEtc;
