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
import * as fs from 'fs';

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
