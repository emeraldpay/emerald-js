import * as React from 'react';
import { shallow } from 'enzyme';
import AppBar from './AppBar';

describe('App', () => {
  it('it renders without crash', () => {
    const wrapper = shallow(<AppBar title="Title" />);
  });
});
