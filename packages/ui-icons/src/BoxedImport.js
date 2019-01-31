import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BoxedImport = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M52 40v16H8V12h16"/><path d="M36 12v16h16m4-20L36 28"/>
  </SvgIcon>
);

export default BoxedImport;
