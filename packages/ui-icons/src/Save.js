import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Save = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 8h48v48H8z"/><path d="M48 8v20H16V8m8 48V44h16v12m-8-12v12"/>
  </SvgIcon>
);

export default Save;
