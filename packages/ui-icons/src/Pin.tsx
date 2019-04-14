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

const Pin: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M8 56l16-16m28-12l4-4-4-4-8-8-4-4-4 4a5.66 5.66 0 0 0 0 8h0l-8 8h0a11.31 11.31 0 0 0-16 0h0l23.94 24.13L36 52a11.36 11.36 0 0 0 0-16h0l8-8h0a5.66 5.66 0 0 0 8 0z"/>
  </SvgIcon>
);

export default Pin;
