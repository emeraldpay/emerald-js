/* eslint-disable no-console */

import path from 'path';
import fse from 'fs-extra';
import glob from 'glob';

function typescriptCopy(from, to) {
  const files = glob.sync('**/*.d.ts', { cwd: from });
  const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  return Promise.all(cmds);
}

// TypeScript
 
const from = path.resolve(__dirname, '../src');
typescriptCopy(from, path.resolve(__dirname, '../lib'));
