(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'fs'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('fs'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fs);
    global.file = mod.exports;
  }
})(this, function (exports, _fs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.checkExists = checkExists;
  exports.deleteIfExists = deleteIfExists;

  var _fs2 = _interopRequireDefault(_fs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function checkExists(filePath) {
    return new Promise(function (resolve) {
      _fs2.default.access(filePath, _fs2.default.constants.R_OK, function (err) {
        if (err) {
          resolve(false);
        } else {
          _fs2.default.stat(filePath, function (e, stat) {
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
  function deleteIfExists(filePath) {
    return new Promise(function (resolve, reject) {
      _fs2.default.access(filePath, _fs2.default.constants.W_OK, function (err) {
        if (err) {
          resolve('not_exists');
        } else {
          _fs2.default.unlink(filePath, function (unlinkError) {
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
});