(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'bignumber.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('bignumber.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bignumber);
    global.convert = mod.exports;
  }
})(this, function (exports, _bignumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _bignumber2 = _interopRequireDefault(_bignumber);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
   * Convert hex string to number
   *
   * @param value
   * @returns {number}
   */
  function toNumber(value) {
    if (value === null) {
      return 0;
    }

    if (typeof value === 'number') {
      return value;
    }

    if (typeof value !== 'string') {
      throw new Error('Invalid argument type ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
    }
    if (value === '0x') {
      return 0;
    }
    return parseInt(value.substring(2), 16);
  }

  function separateThousands(value, separator) {
    return value.toLocaleString('en').split(',').join(separator);
  }

  function toHex(val) {
    var hex = new _bignumber2.default(val).toString(16);
    return '0x' + (hex.length % 2 !== 0 ? '0' + hex : hex);
  }

  function hexToBigNumber(val, defaultValue) {
    if (val === null) {
      return defaultValue;
    }
    if (val === '0x') {
      return new _bignumber2.default(0);
    }
    return new _bignumber2.default(val, 16);
  }

  exports.default = {
    toNumber: toNumber,
    separateThousands: separateThousands,
    toHex: toHex,
    hexToBigNumber: hexToBigNumber
  };
});