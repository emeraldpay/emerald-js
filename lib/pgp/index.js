(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './verify'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./verify'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.verify);
    global.index = mod.exports;
  }
})(this, function (exports, _verify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Verify', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_verify).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});