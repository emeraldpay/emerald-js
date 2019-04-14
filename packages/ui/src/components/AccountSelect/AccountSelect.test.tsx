/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
