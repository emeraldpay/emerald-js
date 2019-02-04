import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { configure, addDecorator, setAddon } from '@storybook/react';
import {EmeraldProvider} from '../src/providers/EmeraldProvider';

setAddon(JSXAddon);

const req = require.context('../stories/', true, /\.tsx$/)

function loadStories() {
  addDecorator((story) => (<EmeraldProvider>{story()}</EmeraldProvider>))
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
