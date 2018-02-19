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
    global.format = mod.exports;
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

  /**
   * Encodes as hex, prefix with "0x", the most compact representation
   * (slight exception: zero should be represented as "0x0")
   */
  function toHex(val) {
    var hex = new _bignumber2.default(val).toString(16);
    return '0x' + hex;
  }


  function isPredefinedBlockNumber(blockNumber) {
    return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
  }

  exports.default = {
    toHex: toHex,
    isPredefinedBlockNumber: isPredefinedBlockNumber
  };
});