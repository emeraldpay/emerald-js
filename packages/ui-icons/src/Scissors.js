import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Scissors = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="16" cy="20" r="8"/><circle cx="16" cy="44" r="8"/><path d="M20.8 37.6L56 20m-35.2 6.4L56 44"/>
  </SvgIcon>
);

export default Scissors;
