// @flow
import os from 'os';

type Platform = 'osx' | 'windows' | 'linux';

export type DownloadConfig = {
    platform: Platform,
    binaries: Array<{type: string, pack: string, url: string}>,
    signatures: Array<{type: string, url: string}>
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
