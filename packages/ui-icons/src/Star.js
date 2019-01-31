import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Star = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 12l6.41 12.84L52 27.28l-9.63 10.38L44.36 52 32 45.58 19.64 52l1.99-14.34L12 27.28l13.59-2.44L32 12z"/>
  </SvgIcon>
);

export default Star;
