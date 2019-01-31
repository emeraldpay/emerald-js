import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Keypair = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="20" cy="44" r="12"/><path d="M56 56V44H32"/><circle cx="20" cy="20" r="12"/><path d="M56 32V20H32"/>
  </SvgIcon>
);

export default Keypair;
