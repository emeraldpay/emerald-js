import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Tire = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><circle cx="32" cy="32" r="12"/><path d="M40 24h16M40 40h16m-16 0v16M24 40v16m0-16H8m16-16H8m16 0V8m16 16V8"/>
  </SvgIcon>
);

export default Tire;
