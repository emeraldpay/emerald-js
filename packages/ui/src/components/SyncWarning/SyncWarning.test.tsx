import * as React from 'react';
import { shallow } from 'enzyme';
import SyncWarning from './SyncWarning';


describe('Card', () => {
  it('it renders without crash', () => {
    const wrapper = shallow(<SyncWarning />);
  });
});
