import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Checkmark = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M12 28l16 16 24-24"/>
  </SvgIcon>
);

export default Checkmark;
