import * as React from 'react';
import { shallow } from 'enzyme';
import SyncWarning from './SyncWarning';


describe('SyncWarning', () => {
  it('it renders without crash', () => {
    const wrapper = shallow(<SyncWarning startingBlock={0} highestBlock={1} currentBlock={1}/>);
    expect(wrapper).toBeDefined();
  });
});
