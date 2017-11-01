(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Repeat', './Delete', './Eye', './QrCode', './Edit', './Close', './Copy', './Gear', './Add', './Search'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Repeat'), require('./Delete'), require('./Eye'), require('./QrCode'), require('./Edit'), require('./Close'), require('./Copy'), require('./Gear'), require('./Add'), require('./Search'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Repeat, global.Delete, global.Eye, global.QrCode, global.Edit, global.Close, global.Copy, global.Gear, global.Add, global.Search);
    global.index = mod.exports;
  }
})(this, function (exports, _Repeat, _Delete, _Eye, _QrCode, _Edit, _Close, _Copy, _Gear, _Add, _Search) {
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
  Object.defineProperty(exports, 'Copy', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Copy).default;
    }
  });
  Object.defineProperty(exports, 'Gear', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Gear).default;
    }
  });
  Object.defineProperty(exports, 'Add', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Add).default;
    }
  });
  Object.defineProperty(exports, 'Search', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Search).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});