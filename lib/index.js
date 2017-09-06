(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './convert', './wei'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./convert'), require('./wei'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.convert, global.wei);
    global.index = mod.exports;
  }
})(this, function (exports, _convert, _wei) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'convert', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_convert).default;
    }
  });
  Object.defineProperty(exports, 'Wei', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_wei).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});