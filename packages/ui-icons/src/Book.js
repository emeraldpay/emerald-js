import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Book = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M32 56l24-4V8l-24 4L8 8v44l24 4zm0-44v44"/>
  </SvgIcon>
);

export default Book;
