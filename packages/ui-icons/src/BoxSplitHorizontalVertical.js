import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BoxSplitHorizontalVertical = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 8h48v48H8zm24 48V8M8 32h48"/>
  </SvgIcon>
);

export default BoxSplitHorizontalVertical;
