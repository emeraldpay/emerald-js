(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './vault'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./vault'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.vault);
    global.index = mod.exports;
  }
})(this, function (exports, _vault) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_vault).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});