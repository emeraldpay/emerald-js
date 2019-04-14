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
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import JSXAddon from 'storybook-addon-jsx';
import { configure, addDecorator, setAddon } from '@storybook/react';
// setAddon(JSXAddon);

const req = require.context('../stories/', true, /\.tsx$/)

function loadStories() {
  // addDecorator((story) => (<MuiThemeProvider theme={theme}><CssBaseline/>{story()}</MuiThemeProvider>))
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
