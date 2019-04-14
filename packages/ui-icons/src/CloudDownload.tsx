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

const CloudDownload: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M45.835 43.468C51.703 41.801 56 36.402 56 30c0-7.732-6.268-14-14-14-1.562 0-3.059.267-4.462.739C35.346 13.864 31.895 12 28 12c-6.627 0-12 5.373-12 12 0 1.418.259 2.773.711 4.036A7.963 7.963 0 0 0 16 28a8 8 0 0 0 0 16h2m6 0l8 8 8-8m-8 8V28"/>
  </SvgIcon>
);

export default CloudDownload;
