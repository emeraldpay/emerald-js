(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'os'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('os'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.os);
    global.config = mod.exports;
  }
})(this, function (exports, _os) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getPlatformConfig = getPlatformConfig;

  var _os2 = _interopRequireDefault(_os);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var platformMapping = {
    darwin: 'osx',
    linux: 'linux',
    win32: 'windows'
  };

  /**
   * Extracts configuration for current platform
   */

  function getPlatformConfig(config) {
    var platform = platformMapping[_os2.default.platform()];
    return config.download.find(function (x) {
      return x.platform === platform;
    });
  }
});