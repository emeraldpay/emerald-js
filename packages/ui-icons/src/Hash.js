import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Hash = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M20 8v48M44 8v48M8 20h48M8 44h48"/>
  </SvgIcon>
);

export default Hash;
