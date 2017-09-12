(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'isomorphic-fetch'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('isomorphic-fetch'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isomorphicFetch);
    global.jsonrpc = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var baseHeaders = {
    'Content-Type': 'application/json'
  };

  var JsonRpc = function () {
    function JsonRpc(url) {
      _classCallCheck(this, JsonRpc);

      this.requestSeq = 1;
      this.url = url;
    }

    /**
     * This call analyses JSON RPC response.
     * It returns promise which resolves whether 'result' field found
     * or reject in case 'error' field found.
     *
     * @returns {Promise}
     */


    _createClass(JsonRpc, [{
      key: 'call',
      value: function call(method, params, headers) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          if (typeof method !== 'string') {
            reject(new Error('RPC call method must be a string, got:\n                    method: ' + method + ',\n                    params: ' + JSON.stringify(params) + ',\n                    headers: ' + JSON.stringify(headers)));
            return;
          }
          _this.post(method, params, headers).then(function (json) {
            if (json.result || json.result === false || json.result === null) {
              resolve(json.result);
            } else if (json.error) {
              reject(json.error);
            } else {
              reject(new Error('Unknown JSON RPC response: ' + JSON.stringify(json) + ',\n                     method: ' + method + ',\n                     params: ' + JSON.stringify(params)));
            }
          }).catch(reject);
        });
      }
    }, {
      key: 'post',
      value: function post(name, params, headers) {
        var data = this.newRequest(name, params);
        var opt = {
          method: 'POST',
          headers: Object.assign(baseHeaders, headers),
          body: JSON.stringify(data)
        };

        return fetch(this.url, opt).then(function (response) {
          if (response.status >= 400) {
            throw new Error('Bad RPC response: ' + response.status);
          }
          return response.json();
        });
      }
    }, {
      key: 'newRequest',
      value: function newRequest(method, params) {
        var request = {
          jsonrpc: '2.0',
          method: method,
          params: params,
          id: this.requestSeq
        };
        this.requestSeq += 1;
        return request;
      }
    }]);

    return JsonRpc;
  }();

  exports.default = JsonRpc;
});