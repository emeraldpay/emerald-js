(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'bignumber.js', './convert'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('bignumber.js'), require('./convert'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bignumber, global.convert);
    global.wei = mod.exports;
  }
})(this, function (exports, _bignumber, _convert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _bignumber2 = _interopRequireDefault(_bignumber);

  var _convert2 = _interopRequireDefault(_convert);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ETHER = new _bignumber2.default(10).pow(18);
  var MWEI = new _bignumber2.default(10).pow(6);
  var ZERO = new _bignumber2.default(0);

  /**
   * Immutable Wei value
   */

  var Wei = function () {
    function Wei(val) {
      _classCallCheck(this, Wei);

      // private member
      var value = ZERO;

      if (typeof val === 'string' || val === null) {
        // TODO: think, should we convert hex here ?
        value = _convert2.default.hexToBigNumber(val, ZERO);
      } else if (typeof val === 'number') {
        value = new _bignumber2.default(val);
      } else {
        value = val;
      }

      if (value.lessThan(1)) {
        value = ZERO;
      }

      // privileged getter
      this.getValue = function () {
        return value;
      };
    }

    _createClass(Wei, [{
      key: 'value',
      value: function value() {
        return this.getValue();
      }
    }, {
      key: 'getEther',
      value: function getEther() {
        var decimals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

        return this.value().dividedBy(ETHER).toFixed(decimals);
      }
    }, {
      key: 'getMwei',
      value: function getMwei() {
        return this.value().dividedBy(MWEI).toFixed(5);
      }
    }, {
      key: 'mul',
      value: function mul(bigNumber) {
        return new Wei(this.value().mul(bigNumber));
      }
    }, {
      key: 'plus',
      value: function plus(another) {
        return new Wei(this.value().plus(another.value()));
      }
    }, {
      key: 'sub',
      value: function sub(another) {
        return new Wei(this.value().sub(another.value()));
      }
    }, {
      key: 'getFiat',
      value: function getFiat(r) {
        var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

        var rate = r === null || typeof r === 'undefined' ? ZERO : new _bignumber2.default(r.toString());
        return this.value().dividedBy(ETHER).mul(rate).toFixed(decimals);
      }
    }]);

    return Wei;
  }();

  Wei.ZERO = new Wei(0);
  exports.default = Wei;
});