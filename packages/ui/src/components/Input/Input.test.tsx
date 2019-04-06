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
    const wrapper = shallow(<Input classes={classes} />);
    expect(wrapper.first().name()).toContain('TextField');
  });

  it('should has type prop', () => {
    const component = shallow(<Input type="number" classes={classes} />);
    expect(component).toBeDefined();
  })
});

