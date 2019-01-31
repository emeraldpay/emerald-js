import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ViewVisible = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="8"/><path d="M56 32s-8 16-24 16S8 32 8 32s8-16 24-16 24 16 24 16z"/>
  </SvgIcon>
);

export default ViewVisible;
