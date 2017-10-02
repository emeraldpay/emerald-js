(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './convert', './wei', './rpc/jsonrpc', './rpc/transport', './rpc/ethrpc', './nodeChecker', './address', './vault'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./convert'), require('./wei'), require('./rpc/jsonrpc'), require('./rpc/transport'), require('./rpc/ethrpc'), require('./nodeChecker'), require('./address'), require('./vault'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.convert, global.wei, global.jsonrpc, global.transport, global.ethrpc, global.nodeChecker, global.address, global.vault);
    global.index = mod.exports;
  }
})(this, function (exports, _convert, _wei, _jsonrpc, _transport, _ethrpc, _nodeChecker, _address, _vault) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'convert', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_convert).default;
    }
  });
  Object.defineProperty(exports, 'Wei', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_wei).default;
    }
  });
  Object.defineProperty(exports, 'JsonRpc', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_jsonrpc).default;
    }
  });
  Object.defineProperty(exports, 'HttpTransport', {
    enumerable: true,
    get: function () {
      return _transport.HttpTransport;
    }
  });
  Object.defineProperty(exports, 'EthRpc', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ethrpc).default;
    }
  });
  Object.defineProperty(exports, 'NodeChecker', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_nodeChecker).default;
    }
  });
  Object.defineProperty(exports, 'Address', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_address).default;
    }
  });
  Object.defineProperty(exports, 'Vault', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_vault).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});