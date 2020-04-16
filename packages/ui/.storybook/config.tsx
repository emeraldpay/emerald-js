import { ThemeProvider } from '@material-ui/core/styles';
import { addDecorator, configure, setAddon } from '@storybook/react';
import * as React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import theme from '../src/theme';

setAddon(JSXAddon);

const req = require.context('../stories/', true, /\.tsx$/);

function loadStories () {
  addDecorator((story) => (<ThemeProvider theme={theme}>{story()}</ThemeProvider>));
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
