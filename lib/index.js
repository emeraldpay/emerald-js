(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './convert'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./convert'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.convert);
    global.index = mod.exports;
  }
})(this, function (exports, _convert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _convert2 = _interopRequireDefault(_convert);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    convert: _convert2.default
  };
});