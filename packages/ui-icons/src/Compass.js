import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Compass = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><path d="M28 28l-4 12 12-4 4-12-12 4z"/>
  </SvgIcon>
);

export default Compass;
