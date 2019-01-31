import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import JSXAddon from 'storybook-addon-jsx';
import { configure, addDecorator, setAddon } from '@storybook/react';
// setAddon(JSXAddon);

const req = require.context('../stories/', true, /\.js$/)

function loadStories() {
  // addDecorator((story) => (<MuiThemeProvider theme={theme}><CssBaseline/>{story()}</MuiThemeProvider>))
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
