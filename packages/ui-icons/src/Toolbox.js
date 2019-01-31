import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Toolbox = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 20h48v32H8zm0 12h48m-24-4v8M20 20l2.89-5.78a4 4 0 0 1 3.6-2.22h11a4 4 0 0 1 3.6 2.22L44 20"/>
  </SvgIcon>
);

export default Toolbox;
