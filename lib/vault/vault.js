(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../assert'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../assert'));
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

  var Vault = function () {
    function Vault(provider) {
      _classCallCheck(this, Vault);

      this.provider = provider;
    }

    /**
     * Returns the list of all not hidden (by default) accounts from the keystore.
     * @param chain - chain name
     * @param showHidden - also show hidden accounts
     * @returns {*}
     */


    _createClass(Vault, [{
      key: 'listAccounts',
      value: function listAccounts(chain) {
        var showHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.notNull(chain, 'chain');
        return this.provider.listAccounts(chain, showHidden);
      }
    }, {
      key: 'signTransaction',
      value: function signTransaction(tx, passphrase, chain) {
        this.notNull(chain, 'chain');
        return this.provider.signTransaction(tx, passphrase, chain);
      }
    }, {
      key: 'importAccount',
      value: function importAccount(data, chain) {
        this.notNull(chain, 'chain');
        return this.provider.importAccount(data, chain);
      }
    }, {
      key: 'unhideAccount',
      value: function unhideAccount(address, chain) {
        this.notNull(chain, 'chain');
        return this.provider.unhideAccount(address, chain);
      }
    }, {
      key: 'hideAccount',
      value: function hideAccount(address, chain) {
        this.notNull(chain, 'chain');
        return this.provider.hideAccount(address, chain);
      }
    }, {
      key: 'exportAccount',
      value: function exportAccount(address, chain) {
        this.notNull(chain, 'chain');
        return this.provider.exportAccount(address, chain);
      }
    }, {
      key: 'updateAccount',
      value: function updateAccount(address, name) {
        var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var chain = arguments[3];

        this.notNull(chain, 'chain');
        return this.provider.updateAccount(address, name, description, chain);
      }
    }, {
      key: 'newAccount',
      value: function newAccount(passphrase, name, description, chain) {
        this.notNull(chain, 'chain');
        return this.provider.newAccount(passphrase, name, description, chain);
      }
    }, {
      key: 'importContract',
      value: function importContract(address, name, abi, chain) {
        this.notNull(chain, 'chain');
        return this.provider.importContract(address, name, abi, chain);
      }
    }, {
      key: 'listContracts',
      value: function listContracts(chain) {
        this.notNull(chain, 'chain');
        return this.provider.listContracts(chain);
      }
    }, {
      key: 'generateMnemonic',
      value: function generateMnemonic() {
        return this.provider.generateMnemonic();
      }
    }, {
      key: 'notNull',
      value: function notNull(value, param) {
        return _assert2.default.assert(value, param + ' must not be null');
      }
    }]);

    return Vault;
  }();

  exports.default = Vault;
});