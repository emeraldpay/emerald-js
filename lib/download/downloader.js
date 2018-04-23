(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'decompress-zip', 'events', 'follow-redirects', 'mz/fs', 'os', 'path', '../pgp', './file'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('decompress-zip'), require('events'), require('follow-redirects'), require('mz/fs'), require('os'), require('path'), require('../pgp'), require('./file'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.decompressZip, global.events, global.followRedirects, global.fs, global.os, global.path, global.pgp, global.file);
    global.downloader = mod.exports;
  }
})(this, function (exports, _decompressZip, _events, _followRedirects, _fs, _os, _path, _pgp, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _decompressZip2 = _interopRequireDefault(_decompressZip);

  var _events2 = _interopRequireDefault(_events);

  var _fs2 = _interopRequireDefault(_fs);

  var _os2 = _interopRequireDefault(_os);

  var _path2 = _interopRequireDefault(_path);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var TMP_FILE_NAME = 'dist.zip';

  var Downloader = function (_EventEmitter) {
    _inherits(Downloader, _EventEmitter);

    function Downloader(config, fileName, dir, signerKeys) {
      _classCallCheck(this, Downloader);

      var _this = _possibleConstructorReturn(this, (Downloader.__proto__ || Object.getPrototypeOf(Downloader)).call(this));

      _this.config = config;
      _this.name = fileName;
      _this.tmp = null;
      _this.basedir = dir;
      _this.signerKeys = signerKeys;
      return _this;
    }

    /**
     * If binary does not found will download archive, unpack and check signature.
     * If binary found - do nothing.
     * @returns {Promise}
     */


    _createClass(Downloader, [{
      key: 'downloadIfNotExists',
      value: function downloadIfNotExists() {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          var target = _path2.default.join(_this2.basedir, _this2.name);

          (0, _file.checkExists)(target).then(function (isExists) {
            if (isExists) {
              resolve('exists');
            } else {
              _this2.backup().then(_this2.downloadArchive.bind(_this2)).then(function (zip) {
                return _this2.downloadPgp().then(function (sig) {
                  return { zip: zip, sig: sig };
                });
              }).then(function (_ref) {
                var zip = _ref.zip,
                    sig = _ref.sig;
                return _this2.verifyArchive(zip, sig);
              }).then(_this2.prepareDirectory.bind(_this2)).then(_this2.unpack.bind(_this2)).then(_this2.cleanup.bind(_this2)).then(resolve).catch(reject);
            }
          });
        });
      }
    }, {
      key: 'downloadArchive',
      value: function downloadArchive() {
        var _this3 = this;

        var targetBinary = this.config.binaries.find(function (x) {
          return x.type === 'https' && x.pack === 'zip';
        });
        if (!targetBinary) {
          return Promise.reject(new Error('Invalid config - could not find zip binaries with https'));
        }
        var targetUrl = targetBinary.url;

        var tmpDir = _path2.default.join(_os2.default.tmpdir(), 'download-' + this.name + '-');

        return _fs2.default.mkdtemp(tmpDir).then(function (tmpfolder) {
          _this3.tmp = tmpfolder;

          return new Promise(function (resolve, reject) {
            _this3.emit('notify', 'Downloading ' + _this3.name + ' from ' + targetUrl + ' to ' + tmpfolder + '/');

            var fileStream = _fs2.default.createWriteStream(_path2.default.join(tmpfolder, TMP_FILE_NAME));

            _followRedirects.https.get(targetUrl, function (response) {
              response.on('error', function (respError) {
                reject(respError);
              });
              response.pipe(fileStream);
              response.on('end', function () {
                _this3.emit('notify', 'Downloaded ' + fileStream.path);
                resolve(fileStream.path);
              });
            }).on('error', function (getError) {
              reject(getError);
            });
          });
        });
      }
    }, {
      key: 'downloadPgp',
      value: function downloadPgp() {
        var _this4 = this;

        var pgp = this.config.signatures.find(function (x) {
          return x.type === 'pgp';
        });
        if (!pgp) {
          return Promise.reject(new Error('Invalid config - could not found pgp signature'));
        }
        var url = pgp.url;

        return new Promise(function (resolve, reject) {
          _this4.emit('notify', 'Downloading PGP keys from ' + url);

          var buf = '';
          _followRedirects.https.get(url, function (response) {
            response.on('error', function (respError) {
              reject(respError);
            });
            response.on('data', function (chunk) {
              buf += chunk.toString();
            });
            response.on('end', function () {
              resolve(buf);
            });
          }).on('error', function (err) {
            reject(err);
          });
        });
      }
    }, {
      key: 'verifyArchive',
      value: function verifyArchive(zip, signature) {
        this.emit('notify', 'Verifying PGP signature');
        var v = new _pgp.Verify();
        v.init(this.signerKeys);
        return v.verify(_fs2.default.readFileSync(zip), signature).then(function () {
          return zip;
        });
      }
    }, {
      key: 'prepareDirectory',
      value: function prepareDirectory(x) {
        var _this5 = this;

        return new Promise(function (resolve, reject) {
          _fs2.default.access(_this5.basedir, function (accessError) {
            if (accessError) {
              _fs2.default.mkdir(_this5.basedir, 511, function (error) {
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
    }, {
      key: 'unpack',
      value: function unpack(zip) {
        var _this6 = this;

        return new Promise(function (resolve, reject) {
          var target = _path2.default.join(_path2.default.resolve(_this6.basedir), _this6.name);

          _this6.emit('notify', 'Unpacking ' + zip + ' to ' + target);

          var unzipper = new _decompressZip2.default(zip);
          unzipper.on('error', function (err) {
            _this6.emit('error', err);
            reject(err);
          });
          unzipper.on('extract', function () {
            _fs2.default.chmod(target, 493, function (moderr) {
              if (moderr) {
                reject(moderr);
              }
              resolve(true);
            });
          });
          unzipper.extract({
            path: _this6.basedir,
            filter: function filter(file) {
              return (
                // https://github.com/bower/decompress-zip/blob/master/lib/file-details.js#L10
                file.type !== 'Directory' && file.filename === _this6.name
              );
            }

          });
        });
      }
    }, {
      key: 'backup',
      value: function backup() {
        var _this7 = this;

        return new Promise(function (resolve, reject) {
          var target = _path2.default.join(_this7.basedir, _this7.name);
          _fs2.default.access(target, _fs2.default.constants.F_OK, function (err) {
            if (!err) {
              var bak = _path2.default.join(_this7.basedir, _this7.name + '.bak');
              (0, _file.deleteIfExists)(bak).then(function () {
                _this7.emit('notify', 'Backup ' + target + ' to ' + bak);
                _fs2.default.rename(target, bak, function () {
                  resolve(true);
                });
              }).catch(reject);
            } else {
              resolve(false);
            }
          });
        });
      }
    }, {
      key: 'cleanup',
      value: function cleanup() {
        var _this8 = this;

        return new Promise(function (resolve, reject) {
          if (!_this8.tmp) {
            resolve('clean');
            return;
          }
          var tempFile = _path2.default.join(_this8.tmp, TMP_FILE_NAME);

          _this8.emit('notify', 'Cleaning up. Removing ' + tempFile);

          (0, _file.deleteIfExists)(tempFile).then(function () {
            _fs2.default.rmdir(_this8.tmp, function (err) {
              if (err) {
                _this8.emit('error', err);
              }
              resolve('cleaned');
            });
          }).catch(function (err) {
            _this8.emit('error', err);
          });
        });
      }
    }]);

    return Downloader;
  }(_events2.default);

  exports.default = Downloader;
});