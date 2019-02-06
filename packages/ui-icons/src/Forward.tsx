import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Forward: React.StatelessComponent<{}> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M24 12l20 20-20 20"/>
  </SvgIcon>
);

export default Forward;
