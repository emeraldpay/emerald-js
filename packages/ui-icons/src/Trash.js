import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Trash = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M52 16l-4 40H16l-4-40m8 0v-3.94A4.06 4.06 0 0 1 24.06 8h15.88A4.06 4.06 0 0 1 44 12.06V16M8 16h48M24 28l16 16m0-16L24 44"/>
  </SvgIcon>
);

export default Trash;
