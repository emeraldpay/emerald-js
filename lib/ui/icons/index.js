(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Repeat'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Repeat'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Repeat);
    global.index = mod.exports;
  }
})(this, function (exports, _Repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Repeat', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Repeat).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});