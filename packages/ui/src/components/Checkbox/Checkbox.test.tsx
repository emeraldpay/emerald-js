import * as React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from './Checkbox';


describe('Checkbox', () => {
  it('changes state when handleCheck called', () => {
    const wrapper = shallow(<Checkbox />);
    wrapper.instance()["handleCheck"](null, true);
    expect(wrapper.state()["checked"]).toBeTruthy();
  });
});
