import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {AccountSelect} from './AccountSelect';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys({root: {}}).reduce(reduceClasses, {});

describe('AccountSelect', () => {
  it('should renders without crash', () => {
    const component = shallow(<AccountSelect classes={classes} accounts={[]} />);
    expect(component).toBeDefined();
  });

  it('should work without onChange prop', () => {
    const component = shallow<AccountSelect>(<AccountSelect classes={classes} accounts={['0x1']} />);
    component.instance().handleMenuItemClick(null, 0);
  });

  it('should handle empty address list and selected address', () => {
    const component = mount(<AccountSelect classes={classes} />);
    expect(component).toBeDefined();
  })
});
