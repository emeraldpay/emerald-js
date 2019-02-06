import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const DropdownArrowUp: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M16 40l16-16 16 16"/>
  </SvgIcon>
);

export default DropdownArrowUp;
