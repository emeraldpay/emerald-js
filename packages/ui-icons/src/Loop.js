import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Loop = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M15.029 48.971A23.926 23.926 0 0 1 8 32.001a23.926 23.926 0 0 1 7.029-16.971A23.925 23.925 0 0 1 32 8m16.971 7.029A23.928 23.928 0 0 1 56 32a23.928 23.928 0 0 1-7.029 16.971A23.926 23.926 0 0 1 32.001 56"/><path d="M15.029 40v8.971H8M48.971 24v-8.971H56"/>
  </SvgIcon>
);

export default Loop;
