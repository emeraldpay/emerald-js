import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Block3d = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 20v24l24 12 24-12V20L32 8 8 20zm24 12l24-12M32 56V32m24 12L32 32M8 44l24-12M8 20l24 12m0-24v24"/>
  </SvgIcon>
);

export default Block3d;
