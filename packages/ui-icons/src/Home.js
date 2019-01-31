import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Home = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 24v32h48V24L32 8 8 24z"/><path d="M40 56V36H24v20"/>
  </SvgIcon>
);

export default Home;
