import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Badge = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="28" r="20"/><circle cx="32" cy="28" r="12"/><path d="M32 48h0c5.122 5.122 12.07 8 19.314 8H56V40h-8m-16 8h0a27.315 27.315 0 0 1-19.314 8H8V40h8"/>
  </SvgIcon>
);

export default Badge;
