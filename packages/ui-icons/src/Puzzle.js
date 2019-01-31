import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Puzzle = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M48 28V12H36c0 2.21 4 8-4 8s-4-5.79-4-8H16v16c-2.21 0-8-4-8 4s5.79 4 8 4v16h12c0-2.21-4-8 4-8s4 5.79 4 8h12V36c2.21 0 8 4 8-4s-5.79-4-8-4z"/>
  </SvgIcon>
);

export default Puzzle;
