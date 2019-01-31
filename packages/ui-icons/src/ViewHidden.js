import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ViewHidden = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 32s-8 16-24 16S8 32 8 32s8-16 24-16 24 16 24 16zm-4-20L12 52m40 0L12 12"/>
  </SvgIcon>
);

export default ViewHidden;
