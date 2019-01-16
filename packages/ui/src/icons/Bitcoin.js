import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Bitcoin = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="#F6B75D" d="M960 704c0 141.385-114.615 256-256 256H320C178.615 960 64 845.385 64 704V320C64 178.615 178.615 64 320 64h384c141.385 0 256 114.615 256 256v384z"/><path d="M336 512h256m0-224H336v448h256m0-224c61.856 0 112-50.144 112-112s-50.144-112-112-112m0 448c61.856 0 112-50.144 112-112s-50.144-112-112-112M608 192v96m-192-96v96m192 448v96m-192-96v96" fill="none" stroke="currentColor" stroke-width="32" stroke-miterlimit="10"/>
  </SvgIcon>
);

export default Bitcoin;
