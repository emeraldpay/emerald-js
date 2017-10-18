(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'ethereumjs-wallet', 'ethereumjs-util'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('ethereumjs-wallet'), require('ethereumjs-util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ethereumjsWallet, global.ethereumjsUtil);
    global.wallet = mod.exports;
  }
})(this, function (exports, _ethereumjsWallet, _ethereumjsUtil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ethereumjsWallet2 = _interopRequireDefault(_ethereumjsWallet);

  var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);

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

  var WalletWrapper = function () {
    _createClass(WalletWrapper, null, [{
      key: 'fromV3',
      value: function fromV3(input, password) {
        return _ethereumjsWallet2.default.fromV3(input, password);
      }
    }, {
      key: 'toV3',
      value: function toV3(privateKey, password) {
        var wallet = _ethereumjsWallet2.default.fromPrivateKey(_ethereumjsUtil2.default.toBuffer(privateKey));
        return wallet.toV3String(password);
      }
    }, {
      key: 'fromPrivateKey',
      value: function fromPrivateKey(privateKey) {
        return new WalletWrapper(_ethereumjsWallet2.default.fromPrivateKey(_ethereumjsUtil2.default.toBuffer(privateKey)));
      }
    }]);

    function WalletWrapper(wallet) {
      _classCallCheck(this, WalletWrapper);

      this.wallet = wallet;
    }

    _createClass(WalletWrapper, [{
      key: 'toV3String',
      value: function toV3String(password) {
        return this.wallet.toV3String(password);
      }
    }, {
      key: 'getAddress',
      value: function getAddress() {
        return this.wallet.getAddress();
      }
    }]);

    return WalletWrapper;
  }();

  exports.default = WalletWrapper;
});