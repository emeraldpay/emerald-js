(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'assert'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('assert'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.assert);
    global.vault = mod.exports;
  }
})(this, function (exports, _assert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assert2 = _interopRequireDefault(_assert);

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

  function notNull(value, param) {
    return (0, _assert2.default)(value, param + ' must not be null');
  }

  function notEmpty(value, param) {
    return (0, _assert2.default)(value && value.length > 0, param + ' must not be empty');
  }

  var Vault = function () {
    function Vault(provider) {
      _classCallCheck(this, Vault);

      this.provider = provider;
    }

    /**
     * Returns the client current version
     */


    _createClass(Vault, [{
      key: 'currentVersion',
      value: function currentVersion() {
        return this.provider.currentVersion();
      }
    }, {
      key: 'listAccounts',
      value: function listAccounts(chain) {
        var showHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        notNull(chain, 'chain');
        return this.provider.listAccounts(chain, showHidden);
      }
    }, {
      key: 'signTransaction',
      value: function signTransaction(tx, passphrase, chain) {
        notNull(chain, 'chain');
        return this.provider.signTransaction(tx, passphrase, chain);
      }
    }, {
      key: 'importAccount',
      value: function importAccount(data, chain) {
        notNull(chain, 'chain');
        return this.provider.importAccount(data, chain);
      }
    }, {
      key: 'unhideAccount',
      value: function unhideAccount(address, chain) {
        notNull(chain, 'chain');
        return this.provider.unhideAccount(address, chain);
      }
    }, {
      key: 'hideAccount',
      value: function hideAccount(address, chain) {
        notNull(chain, 'chain');
        return this.provider.hideAccount(address, chain);
      }
    }, {
      key: 'exportAccount',
      value: function exportAccount(address, chain) {
        notNull(chain, 'chain');
        return this.provider.exportAccount(address, chain);
      }
    }, {
      key: 'updateAccount',
      value: function updateAccount(address, name) {
        var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var chain = arguments[3];

        notNull(chain, 'chain');
        return this.provider.updateAccount(address, name, description, chain);
      }
    }, {
      key: 'newAccount',
      value: function newAccount(passphrase, name, description, chain) {
        notNull(chain, 'chain');
        return this.provider.newAccount(passphrase, name, description, chain);
      }
    }, {
      key: 'importContract',
      value: function importContract(address, name, abi, chain) {
        notNull(chain, 'chain');
        return this.provider.importContract(address, name, abi, chain);
      }
    }, {
      key: 'listContracts',
      value: function listContracts(chain) {
        notNull(chain, 'chain');
        return this.provider.listContracts(chain);
      }
    }, {
      key: 'listAddresses',
      value: function listAddresses(chain) {
        notNull(chain, 'chain');
        return this.provider.listAddresses(chain);
      }
    }, {
      key: 'importAddress',
      value: function importAddress(addressItem, chain) {
        notNull(chain, 'chain');
        return this.provider.importAddress(addressItem, chain);
      }
    }, {
      key: 'deleteAddress',
      value: function deleteAddress(address, chain) {
        return this.provider.deleteAddress(address, chain);
      }
    }, {
      key: 'generateMnemonic',
      value: function generateMnemonic() {
        return this.provider.generateMnemonic();
      }
    }, {
      key: 'importMnemonic',
      value: function importMnemonic(passphrase, name, description, mnemonic, path, chain) {
        try {
          notNull(chain, 'chain');
          notEmpty(passphrase, 'passphrase');
          return this.provider.importMnemonic(passphrase, name, description, mnemonic, path, chain);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }]);

    return Vault;
  }();

  exports.default = Vault;
});