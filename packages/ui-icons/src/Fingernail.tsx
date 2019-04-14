/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Fingernail: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M12 56v-6.909a43.234 43.234 0 0 1 7.262-23.983L20 24m24 0l.738 1.108A43.234 43.234 0 0 1 52 49.091V56m-8-12l-2.743.914a29.275 29.275 0 0 1-18.515 0L20 44V20c0-6.627 5.373-12 12-12h0c6.627 0 12 5.373 12 12v24zm-16-8V24"/>
  </SvgIcon>
);

export default Fingernail;
