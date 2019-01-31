import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Sign = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 24v32H8V8h32M24 40L56 8"/>
  </SvgIcon>
);

export default Sign;
