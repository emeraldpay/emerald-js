import * as React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';
import { ButtonGroup } from './ButtonGroup';

import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

test('Empty children list', () => {
  const component = shallow(<ButtonGroup classes={classes} />);
  expect(component).toBeDefined();
});

test('Renders children list', () => {
  const wrapper = shallow(<ButtonGroup classes={classes}>
    <Checkbox />
    <Checkbox />
  </ButtonGroup>);
  expect(wrapper.children()).toHaveLength(2);
});
