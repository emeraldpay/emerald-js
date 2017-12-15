import fs from 'mz/fs';
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

