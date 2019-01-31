import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BoxSplitCross = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 8h48v48H8zm48 0L8 56m48 0L8 8"/>
  </SvgIcon>
);

export default BoxSplitCross;
