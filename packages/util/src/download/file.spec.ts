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
import { fs } from 'mz';
import { deleteIfExists, checkExists } from './file';

describe('file utils', () => {
  it('deleteIfExists resolves if file not found', () => deleteIfExists('./asdjfhgytueidkjncncbd.txt'));

  it('deleteIfExists resolves when file deleted', () => fs.writeFile('test1', 'Hey there!')
    .then(() => checkExists('test1'))
    .then((exists) => {
      if (!exists) {
        throw new Error();
      } else {
        return deleteIfExists('test1');
      }
    }));
});

