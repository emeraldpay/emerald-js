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
  exports.toHex = toHex;

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

  var ZERO = new _bignumber2.default(0);
  /**
   * Converts number, string or hex string into BigNumber
   */
  function toBigNumber(value) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ZERO;

    if (!value) {
      return defaultValue;
    }
    if (value instanceof _bignumber2.default) {
      return value;
    }
    if (typeof value === 'string') {
      if (value === '0x') {
        return ZERO;
      }
      if (value.substring(0, 2) === '0x') {
        return new _bignumber2.default(value.substring(2), 16);
      }
    }
    return new _bignumber2.default(value, 10);
  }

  function toHex(val) {
    var hex = new _bignumber2.default(val).toString(16);
    return '0x' + (hex.length % 2 !== 0 ? '0' + hex : hex);
  }

  /**
   * Convert amount to smallest denomination of token or any currency
   * For example, amount 1 ether with 18 decimal places will be converted into 1*10^18 base units
   * (i.e. 1*10^18 wei)
   */
  function toBaseUnits(amount, decimals) {
    var unit = new _bignumber2.default(10).pow(decimals);
    return amount.times(unit);
  }

  /**
   * Convert from smallest denomination (base units) to amount of token
   * For example, 1 wei will be converted to 0.000000000000000001 ether
   */
  function fromBaseUnits(amount, decimals) {
    var unit = new _bignumber2.default(10).pow(decimals);
    return amount.div(unit);
  }

  exports.default = {
    toNumber: toNumber,
    toHex: toHex,
    toBigNumber: toBigNumber,
    toBaseUnits: toBaseUnits,
    fromBaseUnits: fromBaseUnits
  };
});