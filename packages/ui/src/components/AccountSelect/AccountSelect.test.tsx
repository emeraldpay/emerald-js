import * as React from 'react';
import { shallow } from 'enzyme';
import AccountSelect from './AccountSelect';

describe('AccountSelect', () => {
  it('should renders without crash', () => {
    const component = shallow(<AccountSelect accounts={[]} />);
    expect(component).toBeDefined();
  })
});