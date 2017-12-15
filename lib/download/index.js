(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './downloader', './config'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./downloader'), require('./config'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.downloader, global.config);
    global.index = mod.exports;
  }
})(this, function (exports, _downloader, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Downloader', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_downloader).default;
    }
  });
  Object.defineProperty(exports, 'getPlatformConfig', {
    enumerable: true,
    get: function () {
      return _config.getPlatformConfig;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});