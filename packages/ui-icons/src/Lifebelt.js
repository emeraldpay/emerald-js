import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Lifebelt = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><circle cx="32" cy="32" r="8"/><path d="M48.97 48.97L37.66 37.66M26.34 26.34L15.03 15.03m22.63 11.31l11.31-11.31M26.34 37.66L15.03 48.97"/>
  </SvgIcon>
);

export default Lifebelt;
