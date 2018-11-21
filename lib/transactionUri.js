(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['ethereumjs-util', 'qs'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('ethereumjs-util'), require('qs'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.ethereumjsUtil, global.qs);
    global.transactionUri = mod.exports;
  }
})(this, function (_ethereumjsUtil, _qs) {
  'use strict';

  var qs = _interopRequireWildcard(_qs);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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

  var TransactionUri = function () {
    function TransactionUri(transaction, abi) {
      _classCallCheck(this, TransactionUri);

      this.transaction = transaction;
      this.abi = abi;
    }

    _createClass(TransactionUri, [{
      key: 'toString',
      value: function toString() {
        var tx = _extends({}, this.transaction, {
          abi: this.abi
        });
        return 'ethereum:' + this.transaction.to + '?' + qs.stringify(this.transaction);
      }
    }]);

    return TransactionUri;
  }();
});