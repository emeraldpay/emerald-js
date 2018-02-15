(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'bignumber.js', '../convert', './jsonrpc'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('bignumber.js'), require('../convert'), require('./jsonrpc'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bignumber, global.convert, global.jsonrpc);
    global.ethrpc = mod.exports;
  }
})(this, function (exports, _bignumber, _convert, _jsonrpc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _bignumber2 = _interopRequireDefault(_bignumber);

  var _convert2 = _interopRequireDefault(_convert);

  var _jsonrpc2 = _interopRequireDefault(_jsonrpc);

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

  var EthApi = function () {
    function EthApi(jsonRpc) {
      _classCallCheck(this, EthApi);

      this.rpc = jsonRpc;
    }

    /**
     * Returns the current Ethereum protocol version
     */


    _createClass(EthApi, [{
      key: 'protocolVersion',
      value: function protocolVersion() {
        return this.rpc.call('eth_protocolVersion', []);
      }
    }, {
      key: 'getBalance',
      value: function getBalance(address) {
        var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';

        return this.rpc.call('eth_getBalance', [address, blockNumber]).then(function (hexBalance) {
          return _convert2.default.toBigNumber(hexBalance);
        });
      }
    }, {
      key: 'gasPrice',
      value: function gasPrice() {
        return this.rpc.call('eth_gasPrice', []).then(function (hexPrice) {
          return _convert2.default.toBigNumber(hexPrice);
        });
      }
    }, {
      key: 'syncing',
      value: function syncing() {
        return this.rpc.call('eth_syncing', []);
      }
    }, {
      key: 'call',
      value: function call(to, data) {
        var blockNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'latest';

        return this.rpc.call('eth_call', [{ to: to, data: data }, blockNumber]);
      }
    }, {
      key: 'estimateGas',
      value: function estimateGas(call) {
        return this.rpc.call('eth_estimateGas', [call]).then(function (gas) {
          return _convert2.default.toNumber(gas);
        });
      }
    }, {
      key: 'getBlockNumber',
      value: function getBlockNumber() {
        return this.rpc.call('eth_blockNumber', []).then(function (result) {
          return _convert2.default.toNumber(result);
        });
      }
    }, {
      key: 'getBlockByNumber',
      value: function getBlockByNumber() {
        var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';
        var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        return this.rpc.call('eth_getBlockByNumber', [blockNumber, full]);
      }
    }, {
      key: 'getTransactionCount',
      value: function getTransactionCount(address) {
        var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';

        return this.rpc.call('eth_getTransactionCount', [address, blockNumber]);
      }
    }, {
      key: 'getTransactionReceipt',
      value: function getTransactionReceipt(hash) {
        return this.rpc.call('eth_getTransactionReceipt', [hash]);
      }
    }, {
      key: 'sendRawTransaction',
      value: function sendRawTransaction(signed) {
        return this.rpc.call('eth_sendRawTransaction', [signed]);
      }
    }, {
      key: 'getTransactionByHash',
      value: function getTransactionByHash(hash) {
        return this.rpc.call('eth_getTransactionByHash', [hash]);
      }
    }]);

    return EthApi;
  }();

  var NetApi = function () {
    function NetApi(jsonRpc) {
      _classCallCheck(this, NetApi);

      this.rpc = jsonRpc;
    }

    /**
     * Returns the current network id.
     */


    _createClass(NetApi, [{
      key: 'version',
      value: function version() {
        return this.rpc.call('net_version', []);
      }
    }, {
      key: 'listening',
      value: function listening() {
        return this.rpc.call('net_listening', []);
      }
    }, {
      key: 'peerCount',
      value: function peerCount() {
        return this.rpc.call('net_peerCount', []).then(function (result) {
          return _convert2.default.toNumber(result);
        });
      }
    }]);

    return NetApi;
  }();

  var Web3Api = function () {
    function Web3Api(jsonRpc) {
      _classCallCheck(this, Web3Api);

      this.rpc = jsonRpc;
    }

    /**
     * Returns the current client version.
     */


    _createClass(Web3Api, [{
      key: 'clientVersion',
      value: function clientVersion() {
        return this.rpc.call('web3_clientVersion', []);
      }
    }]);

    return Web3Api;
  }();

  var ExtApi = function () {
    function ExtApi(jsonRpc) {
      _classCallCheck(this, ExtApi);

      this.rpc = jsonRpc;
    }

    _createClass(ExtApi, [{
      key: 'getBalances',
      value: function getBalances(addresses) {
        var _this = this;

        var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';

        var balances = {};
        var requests = addresses.map(function (a) {
          return _this.rpc.newBatchRequest('eth_getBalance', [a, blockNumber], function (resp) {
            balances[a] = resp.result;
          });
        });

        return this.rpc.batch(requests).then(function () {
          return balances;
        });
      }
    }, {
      key: 'getTransactions',
      value: function getTransactions(hashes) {
        var _this2 = this;

        var requests = hashes.map(function (h) {
          return _this2.rpc.newBatchRequest('eth_getTransactionByHash', [h]);
        });
        return this.rpc.batch(requests);
      }
    }, {
      key: 'batchCall',
      value: function batchCall(calls) {
        var _this3 = this;

        var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';

        var results = {};
        var responseHandler = function responseHandler(id) {
          return function (resp) {
            results[id] = resp;
          };
        };

        var requests = calls.map(function (c) {
          return _this3.rpc.newBatchRequest('eth_call', [{ to: c.to, data: c.data }, blockNumber], responseHandler(c.id));
        });
        return this.rpc.batch(requests).then(function () {
          return results;
        });
      }
    }]);

    return ExtApi;
  }();

  var EthRpc = function () {
    function EthRpc(jsonRpc) {
      _classCallCheck(this, EthRpc);

      this.rpc = jsonRpc;
      this.eth = new EthApi(jsonRpc);
      this.net = new NetApi(jsonRpc);
      this.web3 = new Web3Api(jsonRpc);
      this.ext = new ExtApi(jsonRpc);
    }

    _createClass(EthRpc, [{
      key: 'raw',
      value: function raw(method, params) {
        return this.rpc.call(method, params);
      }
    }]);

    return EthRpc;
  }();

  exports.default = EthRpc;
});