(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './rpc/ethrpc', './convert'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./rpc/ethrpc'), require('./convert'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ethrpc, global.convert);
    global.nodeChecker = mod.exports;
  }
})(this, function (exports, _ethrpc, _convert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ethrpc2 = _interopRequireDefault(_ethrpc);

  var _convert2 = _interopRequireDefault(_convert);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var NodeChecker = function () {
    function NodeChecker(ethRpc) {
      _classCallCheck(this, NodeChecker);

      this.ethRpc = ethRpc;
    }

    _createClass(NodeChecker, [{
      key: 'check',
      value: function check() {
        var _this = this;

        return this.exists().then(function (clientVersion) {
          return _this.getChain().then(function (chain) {
            return _extends({}, chain, {
              clientVersion: clientVersion
            });
          });
        });
      }
    }, {
      key: 'exists',
      value: function exists() {
        return this.ethRpc.web3.clientVersion();
      }
    }, {
      key: 'getChain',
      value: function getChain() {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          _this2.ethRpc.eth.getBlockByNumber('0x0', false).then(function (result) {
            if (result.hash === NodeChecker.ETC_MAINNET_GENESIS) {
              // try to detect ethereum fork
              _this2.ethRpc.eth.getBlockByNumber(_convert2.default.toHex(2000000)).then(function (block2000000) {
                if (block2000000) {
                  if (block2000000.hash === NodeChecker.ETH_BLOCK_2000000) {
                    resolve({ chain: 'mainnet', chainId: 1 });
                  } else if (block2000000.hash === NodeChecker.ETC_BLOCK_2000000) {
                    resolve({ chain: 'mainnet', chainId: 61 });
                  } else {
                    reject(new Error('Unknown chain block#2000000 ' + block2000000.hash));
                  }
                } else {
                  resolve({ chain: 'mainnet', chainId: 61 });
                }
              });
            } else if (result.hash === NodeChecker.ETC_MAINNET_GENESIS) {
              resolve({ chain: 'morden', chainId: 62 });
            } else {
              reject(new Error('Unknown chain ' + result.hash));
            }
          }).catch(function (error) {
            reject(error);
          });
        });
      }
    }]);

    return NodeChecker;
  }();

  NodeChecker.ETC_MAINNET_GENESIS = '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3';
  NodeChecker.ETC_MORDEN_GENESIS = '0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303';
  NodeChecker.ETC_BLOCK_2000000 = '0x3b56d9e73aa7cac630eb718c24923757a7d08b2b1a52d62676a1749e1f345be3';
  NodeChecker.ETH_BLOCK_2000000 = '0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6';
  exports.default = NodeChecker;
});