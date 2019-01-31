import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Game = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M56 56l-8-4-8 4-8-4-8 4-8-4-8 4V32A24 24 0 0 1 32 8h0a24 24 0 0 1 24 24zM24 28v4m16-4v4"/>
  </SvgIcon>
);

export default Game;
