import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Cli: React.StatelessComponent<{}> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 12h48v40H8z"/><path d="M20 40l8-8-8-8m12 16h12"/>
  </SvgIcon>
);

export default Cli;
