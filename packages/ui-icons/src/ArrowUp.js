import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ArrowUp = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M40 20l-8-8-8 8m8-8v40"/>
  </SvgIcon>
);

export default ArrowUp;
