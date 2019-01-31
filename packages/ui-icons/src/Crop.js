import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Crop = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 48H16V8"/><path d="M8 16h40v40M8 56L56 8"/>
  </SvgIcon>
);

export default Crop;
