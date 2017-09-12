(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
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

  var JsonRpc = function () {
    function JsonRpc(transport) {
      _classCallCheck(this, JsonRpc);

      this.transport = transport;
      this.requestSeq = 1;
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
      value: function call(method, params) {
        var request = this.newRequest(method, params);

        return this.transport.request(request).then(function (json) {
          if (json.result || json.result === false || json.result === null) {
            return json.result;
          } else if (json.error) {
            throw new Error(json);
          } else {
            throw new Error('Unknown JSON RPC response: ' + JSON.stringify(json) + ',\n                     method: ' + method + ',\n                     params: ' + JSON.stringify(params));
          }
        }).catch(function (error) {
          throw error;
        });
      }
    }, {
      key: 'batch',
      value: function batch(requests) {
        // build map id -> handler
        var handlers = {};
        requests.forEach(function (r) {
          handlers[r.request.id] = r.handler;
        });

        return this.transport.request(requests.map(function (r) {
          return r.request;
        })).then(function (responses) {
          // call handler associated with request
          responses.forEach(function (response) {
            if (typeof handlers[response.id] === 'function') {
              handlers[response.id](response);
            }
          });
          return responses;
        }).catch(function (error) {
          throw error;
        });
      }
    }, {
      key: 'newBatchRequest',
      value: function newBatchRequest(method, params, handler) {
        return {
          request: this.newRequest(method, params),
          handler: handler
        };
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