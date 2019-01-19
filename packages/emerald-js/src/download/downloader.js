// @flow
import DecompressZip from 'decompress-zip';
import EventEmitter from 'events';
import { https } from 'follow-redirects';
import fs from 'mz/fs';
import os from 'os';
import path from 'path';
import { Verify } from '../pgp';
import { checkExists, deleteIfExists } from './file';

import type { DownloadConfig } from './config';

const TMP_FILE_NAME = 'dist.zip';

export default class Downloader extends EventEmitter {
  basedir: string;
  name: string;
  config: DownloadConfig;
  signerKeys: Array<string>;
  tmp: ?string;

  constructor(config: DownloadConfig, fileName: string, dir: string, signerKeys: Array<string>) {
    super();
    this.config = config;
    this.name = fileName;
    this.tmp = null;
    this.basedir = path.resolve(dir);
    this.signerKeys = signerKeys;
  }

  /**
   * If binary does not found will download archive, unpack and check signature.
   * If binary found - do nothing.
   * @returns {Promise}
   */
  downloadIfNotExists(): Promise<any> {
    return new Promise((resolve, reject) => {
      const target = path.join(this.basedir, this.name);

      checkExists(target).then((isExists) => {
        if (isExists) {
          resolve('exists');
        } else {
          this.backup()
            .then(this.downloadArchive.bind(this))
            .then(zip => this.downloadPgp().then(sig => ({ zip, sig })))
            .then(({ zip, sig }) => this.verifyArchive(zip, sig))
            .then(this.prepareDirectory.bind(this))
            .then(this.unpack.bind(this))
            .then(this.cleanup.bind(this))
            .then(resolve)
            .catch(reject);
        }
      });
    });
  }

  /**
   * Returns promise which resolves to file path of downloaded archive
   * @returns {Promise.<string>}
   */
  downloadArchive(): Promise<string> {
    const targetBinary = this.config.binaries.find(x => x.type === 'https' && x.pack === 'zip');
    if (!targetBinary) {
      return Promise.reject(new Error('Invalid config - could not find zip binaries with https'));
    }
    const targetUrl = targetBinary.url;

    const tmpDir = path.join(os.tmpdir(), `download-${this.name}-`);

    return fs.mkdtemp(tmpDir).then((tmpfolder) => {
      this.tmp = tmpfolder;

      return new Promise((resolve, reject) => {
        this.emit('notify', `Downloading ${this.name} from ${targetUrl} to ${tmpfolder}/`);

        const fileStream = fs.createWriteStream(path.join(tmpfolder, TMP_FILE_NAME));

        https.get(targetUrl, (response) => {
          response.on('error', (respError) => {
            reject(respError);
          });
          response.pipe(fileStream);
          response.on('end', () => {
            this.emit('notify', `Downloaded ${fileStream.path}`);
            resolve(fileStream.path);
          });
        }).on('error', (getError) => {
          reject(getError);
        });
      });
    });
  }

  downloadPgp(): Promise<string> {
    const pgp = this.config.signatures.find(x => x.type === 'pgp');
    if (!pgp) {
      return Promise.reject(new Error('Invalid config - could not found pgp signature'));
    }
    const { url } = pgp;
    return new Promise((resolve, reject) => {
      this.emit('notify', `Downloading PGP keys from ${url}`);

      let buf = '';
      https.get(url, (response) => {
        response.on('error', (respError) => {
          reject(respError);
        });
        response.on('data', (chunk) => {
          buf += chunk.toString();
        });
        response.on('end', () => {
          resolve(buf);
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
  }

  verifyArchive(zip: string, signature: string): Promise<string> {
    this.emit('notify', 'Verifying PGP signature');
    const v = new Verify();
    v.init(this.signerKeys);
    return v.verify(fs.readFileSync(zip), signature)
      .then(() => zip);
  }

  prepareDirectory(x): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.access(this.basedir, (accessError) => {
        if (accessError) {
          fs.mkdir(this.basedir, 0o777, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(x);
            }
          });
        } else {
          resolve(x);
        }
      });
    });
  }

  unpack(zip: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const target = path.join(this.basedir, this.name);

      this.emit('notify', `Unpacking ${zip} to ${target}`);

      const unzipper = new DecompressZip(zip);
      unzipper.on('error', (err) => {
        this.emit('error', err);
        reject(err);
      });
      unzipper.on('extract', () => {
        fs.chmod(target, 0o755, (moderr) => {
          if (moderr) {
            reject(moderr);
          }
          resolve(true);
        });
      });
      unzipper.extract({
        path: this.basedir,
        filter: file =>
          // https://github.com/bower/decompress-zip/blob/master/lib/file-details.js#L10
          file.type !== 'Directory' && file.filename === this.name
        ,
      });
    });
  }

  backup(): Promise<any> {
    return new Promise((resolve, reject) => {
      const target = path.join(this.basedir, this.name);
      fs.access(target, fs.constants.F_OK, (err) => {
        if (!err) {
          const bak = path.join(this.basedir, `${this.name}.bak`);
          deleteIfExists(bak).then(() => {
            this.emit('notify', `Backup ${target} to ${bak}`);
            fs.rename(target, bak, () => {
              resolve(true);
            });
          }).catch(reject);
        } else {
          resolve(false);
        }
      });
    });
  }

  cleanup(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.tmp) {
        resolve('clean');
        return;
      }
      const tempFile = path.join(this.tmp, TMP_FILE_NAME);

      this.emit('notify', `Cleaning up. Removing ${tempFile}`);

      deleteIfExists(tempFile).then(() => {
        fs.rmdir(this.tmp, (err) => {
          if (err) {
            this.emit('error', err);
          }
          resolve('cleaned');
        });
      }).catch((err) => {
        this.emit('error', err);
      });
    });
  }
}
