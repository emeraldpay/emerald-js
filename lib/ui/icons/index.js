(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Repeat', './Delete', './Eye'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Repeat'), require('./Delete'), require('./Eye'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Repeat, global.Delete, global.Eye);
    global.index = mod.exports;
  }
})(this, function (exports, _Repeat, _Delete, _Eye) {
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
  Object.defineProperty(exports, 'Delete', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Delete).default;
    }
  });
  Object.defineProperty(exports, 'Eye', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Eye).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});