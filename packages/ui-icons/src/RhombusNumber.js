import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const RhombusNumber = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24 8v48M40 8v48m16-32H8m48 16H8"/>
  </SvgIcon>
);

export default RhombusNumber;
