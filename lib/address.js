(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'ethereumjs-util'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('ethereumjs-util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ethereumjsUtil);
    global.address = mod.exports;
  }
})(this, function (exports, _ethereumjsUtil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var Address = function () {
    function Address() {
      _classCallCheck(this, Address);
    }

    _createClass(Address, null, [{
      key: 'isValid',
      value: function isValid(address) {
        return _ethereumjsUtil2.default.isValidAddress(address);
      }
    }]);

    return Address;
  }();

  exports.default = Address;
});