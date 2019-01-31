import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Contract = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 12h48v40H8z"/><path d="M40 40l8-8-8-8m-16 0l-8 8 8 8m10-18l-4 20"/>
  </SvgIcon>
);

export default Contract;
