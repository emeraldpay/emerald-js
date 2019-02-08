import * as React from 'react';
import { shallow } from 'enzyme';
import { Warning, WarningHeader, WarningText } from './Warning';

import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Warning', () => {
  it('renders without crash', () => {
    const component = shallow(<Warning><WarningHeader /><WarningText /></Warning>);
    expect(component.children()).toHaveLength(2);
  });
});
