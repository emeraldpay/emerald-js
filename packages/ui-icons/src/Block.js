import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Block = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 20v24l24 12 24-12V20L32 8 8 20z"/><path d="M56 20L32 32 8 20m24 12v24"/>
  </SvgIcon>
);

export default Block;
