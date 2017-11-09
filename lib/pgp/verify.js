(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'kbpgp'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('kbpgp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.kbpgp);
    global.verify = mod.exports;
  }
})(this, function (exports, _kbpgp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _kbpgp2 = _interopRequireDefault(_kbpgp);

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

  var Verify = function () {
    function Verify() {
      _classCallCheck(this, Verify);
    }

    _createClass(Verify, [{
      key: 'init',
      value: function init(publicKeys) {
        var _this = this;

        var kms = [];
        publicKeys.forEach(function (armored) {
          _kbpgp2.default.KeyManager.import_from_armored_pgp({ armored: armored }, function (err, key) {
            if (!err) {
              kms.push(key);
            } else {
              throw err;
            }
          });
        });

        this.ring = new _kbpgp2.default.keyring.KeyRing();
        kms.forEach(function (km) {
          _this.ring.add_key_manager(km);
        });
      }
    }, {
      key: 'verify',
      value: function verify(data, signature) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          _kbpgp2.default.unbox({ keyfetch: _this2.ring, data: data, armored: signature }, function (err, literals) {
            if (err !== null) {
              reject(err);
            } else {
              var km = null;
              var ds = literals[0].get_data_signer();
              if (ds) {
                km = ds.get_key_manager();
              }
              if (km) {
                resolve(km.get_pgp_fingerprint().toString('hex'));
              } else {
                reject(new Error('No key found'));
              }
            }
          });
        });
      }
    }]);

    return Verify;
  }();

  exports.default = Verify;
});