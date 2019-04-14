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
import { shallow } from 'enzyme';
import SyncWarning from './SyncWarning';


describe('SyncWarning', () => {
  it('it renders without crash', () => {
    const wrapper = shallow(<SyncWarning startingBlock={0} highestBlock={1} currentBlock={1}/>);
    expect(wrapper).toBeDefined();
  });
});
