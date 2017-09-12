(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './jsonrpc', 'isomorphic-fetch'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./jsonrpc'), require('isomorphic-fetch'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jsonrpc, global.isomorphicFetch);
    global.transport = mod.exports;
  }
})(this, function (exports, _jsonrpc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HttpTransport = undefined;

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

  var HttpTransport = function () {
    function HttpTransport(url, headers) {
      _classCallCheck(this, HttpTransport);

      this.url = url;
      this.headers = headers;
    }

    _createClass(HttpTransport, [{
      key: 'request',
      value: function request(_request) {
        var opt = {
          method: 'POST',
          headers: Object.assign(baseHeaders, this.headers),
          body: JSON.stringify(_request)
        };

        return fetch(this.url, opt).then(function (response) {
          if (response.status !== 200) {
            throw new Error(response.status + ': ' + response.statusText);
          }
          return response.json();
        });
      }
    }]);

    return HttpTransport;
  }();

  exports.HttpTransport = HttpTransport;
});