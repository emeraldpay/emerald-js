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
// @flow
import * as os from 'os';

type Platform = 'osx' | 'windows' | 'linux';

export interface DownloadConfig {
    platform: Platform;
    binaries: Array<{type: string, pack: string, url: string}>;
    signatures: Array<{type: string, url: string}>;
}

const platformMapping = {
  darwin: 'osx',
  linux: 'linux',
  win32: 'windows',
};

/**
 * Extracts configuration for current platform
 */
export function getPlatformConfig(config: any): DownloadConfig {
  const platform = platformMapping[os.platform()];
  return config.download.find(x => x.platform === platform);
}
