import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EmoteSad = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><path d="M23.51 43.51a12 12 0 0 1 17 0M40 24h-4m-8 0h-4"/>
  </SvgIcon>
);

export default EmoteSad;
