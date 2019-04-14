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
import { shallow, mount } from 'enzyme';
import { Pen3 as EditIcon } from '@emeraldplatform/ui-icons';
import { Account, getStyles } from './Account';
import IdentityIcon from '../IdentityIcon';
import Address from '../Address';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(getStyles()).reduce(reduceClasses, {});

describe('Account', () => {
  it('should render nested components', () => {
    const component = mount(<Account classes={classes} identity={true} address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);
    expect(component).toBeDefined();
  });

  it('shows Address when address provided', () => {
    const accountAddr = shallow(<Account classes={classes} address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);
    expect(accountAddr.find(Address).props().id).toEqual('0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98');
  });
  it('not editable by default', () => {
    const accountAddr = shallow(<Account classes={classes} address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);
    expect(accountAddr.find(EditIcon)).toHaveLength(0);
  });
  it('not identityIcon by default', () => {
    const accountAddr = shallow(<Account classes={classes} address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);
    expect(accountAddr.find(IdentityIcon)).toHaveLength(0);
  });
  it('shows identity when true', () => {
    const accountAddr = shallow(<Account classes={classes} identity address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);
    expect(accountAddr.find(IdentityIcon)).toHaveLength(1);
  });
});

