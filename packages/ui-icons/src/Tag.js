import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Tag = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M36 8L8 36l20 20 28-28V8H36z"/><circle cx="44" cy="20" r="4"/>
  </SvgIcon>
);

export default Tag;
