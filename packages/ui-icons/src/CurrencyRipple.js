import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CurrencyRipple = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 8L40.519 23.481c-4.705 4.705-12.333 4.705-17.038 0L8 8m0 48l15.51-15.51c4.689-4.689 12.29-4.689 16.979 0L56 56"/>
  </SvgIcon>
);

export default CurrencyRipple;
