import * as React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';


const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys({}).reduce(reduceClasses, {});
const build = () => shallow(<Input classes={classes} />);


describe("Input", () => {
  it('Renders', () => {
    const component = build();
    expect(component).toBeDefined();
  });
  
  it('should wrap TextField', () => {
    const wrapper = build();
    expect(wrapper.text()).toContain('TextField');
  });
});

