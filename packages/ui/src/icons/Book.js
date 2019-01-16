import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Book = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" d="M32 56l24-4V8l-24 4L8 8v44l24 4zM32 12v44" strokeWidth="4" strokeMiterlimit="10"/>
  </SvgIcon>
);

export default Book;
