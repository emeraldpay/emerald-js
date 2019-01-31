import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const GroundPlan = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 8h48v48H8zm0 32h48m-32 0v16"/><path d="M32 40V20H8m48 8H32M20 8v12"/>
  </SvgIcon>
);

export default GroundPlan;
