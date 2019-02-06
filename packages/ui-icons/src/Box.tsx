import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Box: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 8h48v48H8z"/>
  </SvgIcon>
);

export default Box;
