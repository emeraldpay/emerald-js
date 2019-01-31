import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FilterGrid = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 8v48M8 32h48M8 8h48v48H8z"/>
  </SvgIcon>
);

export default FilterGrid;
