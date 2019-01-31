import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Flag = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 32h32L36 20 48 8H16v48"/>
  </SvgIcon>
);

export default Flag;
