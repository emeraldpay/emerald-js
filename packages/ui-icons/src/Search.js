import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Search = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="28" cy="28" r="20"/><path d="M56 56L42.14 42.14"/>
  </SvgIcon>
);

export default Search;
