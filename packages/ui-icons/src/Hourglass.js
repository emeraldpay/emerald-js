import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Hourglass = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M44 56c0-7.554.443-14.667-5.6-19.2l-12.8-9.6C19.557 22.667 20 15.554 20 8"/><path d="M44 8c0 7.554.443 14.667-5.6 19.2l-12.8 9.6C19.557 41.333 20 48.446 20 56M12 8h40m0 48H12"/>
  </SvgIcon>
);

export default Hourglass;
