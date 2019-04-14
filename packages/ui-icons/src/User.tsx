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

const User: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M44 24c0 8.84-4 16-12 16s-12-7.16-12-16c0-12 4-16 12-16s12 4 12 16z"/><path d="M22 33.46s-10.08 2.69-12 8A32.91 32.91 0 0 0 8 56h48a32.91 32.91 0 0 0-1.94-14.54c-1.93-5.31-12-8-12-8"/>
  </SvgIcon>
);

export default User;
