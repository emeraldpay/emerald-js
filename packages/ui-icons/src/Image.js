import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Image = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 44h8c8 0 16-8 24-8s8 8 16 8h0"/><path d="M8 8h48v48H8z"/><circle cx="22" cy="22" r="6"/>
  </SvgIcon>
);

export default Image;
