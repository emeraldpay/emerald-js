import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Trezor = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24.71 25.82L16 28v20l16 8 16-8V28l-8.71-2.18a30.07 30.07 0 0 0-14.58 0z"/><path d="M20 27v-7a12 12 0 0 1 24 0v7"/>
  </SvgIcon>
);

export default Trezor;
