import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Model = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 40h16v16H8zm32 0h16v16H40zM24 8h16v16H24zm24 32v-8H16v8m16-8v-8"/>
  </SvgIcon>
);

export default Model;
