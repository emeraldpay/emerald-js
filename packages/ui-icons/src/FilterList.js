import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FilterList = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 20h32M16 44h32m0-12H16M8 8h48v48H8z"/>
  </SvgIcon>
);

export default FilterList;
