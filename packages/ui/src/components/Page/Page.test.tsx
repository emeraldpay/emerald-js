import * as React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

describe('Page', () => {
  it('it renders without crash', () => {
    const wrapper = shallow(<Page title="Title" />);
  });
});
