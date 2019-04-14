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

const Loop: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M15.029 48.971A23.926 23.926 0 0 1 8 32.001a23.926 23.926 0 0 1 7.029-16.971A23.925 23.925 0 0 1 32 8m16.971 7.029A23.928 23.928 0 0 1 56 32a23.928 23.928 0 0 1-7.029 16.971A23.926 23.926 0 0 1 32.001 56"/><path d="M15.029 40v8.971H8M48.971 24v-8.971H56"/>
  </SvgIcon>
);

export default Loop;
