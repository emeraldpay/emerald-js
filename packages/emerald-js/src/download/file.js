// @flow
import fs from 'fs';

export function checkExists(filePath: string): Promise<boolean> {
  return new Promise((resolve) => {
    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        resolve(false);
      } else {
        fs.stat(filePath, (e, stat) => {
          if (e) {
            resolve(false);
          } else if (!stat.isFile() || stat.size === 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        });
      }
    });
  });
}


export function deleteIfExists(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.W_OK, (err) => {
      if (err) {
        resolve('not_exists');
      } else {
        fs.unlink(filePath, (unlinkError) => {
          if (unlinkError) {
            reject(unlinkError);
          } else {
            resolve('deleted');
          }
        });
      }
    });
  });
}
