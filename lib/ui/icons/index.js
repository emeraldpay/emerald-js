(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Repeat', './Delete', './Eye', './QrCode', './Edit', './Close'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Repeat'), require('./Delete'), require('./Eye'), require('./QrCode'), require('./Edit'), require('./Close'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Repeat, global.Delete, global.Eye, global.QrCode, global.Edit, global.Close);
    global.index = mod.exports;
  }
})(this, function (exports, _Repeat, _Delete, _Eye, _QrCode, _Edit, _Close) {
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
  Object.defineProperty(exports, 'QrCode', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_QrCode).default;
    }
  });
  Object.defineProperty(exports, 'Edit', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Edit).default;
    }
  });
  Object.defineProperty(exports, 'Close', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Close).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});