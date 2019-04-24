import * as React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { configure, addDecorator, setAddon } from '@storybook/react';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../src/theme';
import {EmeraldProvider} from '../src/providers/EmeraldProvider';

setAddon(JSXAddon);

const req = require.context('../stories/', true, /\.tsx$/);

function loadStories() {
  addDecorator((story) => (<ThemeProvider theme={theme}>{story()}</ThemeProvider>));
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
