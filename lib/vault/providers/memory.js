(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'ethereumjs-wallet'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('ethereumjs-wallet'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ethereumjsWallet);
    global.memory = mod.exports;
  }
})(this, function (exports, _ethereumjsWallet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ethereumjsWallet2 = _interopRequireDefault(_ethereumjsWallet);

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

  var InMemoryProvider = function () {
    function InMemoryProvider() {
      _classCallCheck(this, InMemoryProvider);

      this.accounts = {};
      this.contracts = {};
    }

    /**
       * Returns the list of all not hidden (by default) accounts from the keystore.
       * @param chain - chain name
       * @param showHidden - also show hidden accounts
       * @returns {*}
       */


    _createClass(InMemoryProvider, [{
      key: 'listAccounts',
      value: function listAccounts(chain) {
        var showHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var accounts = this.accounts[chain] || [];
        var result = accounts.filter(function (a) {
          return showHidden ? true : !a.hidden;
        }).map(function (a) {
          return {
            address: a.address,
            name: a.name,
            description: a.description,
            hidden: a.hidden,
            hardware: a.hardware
          };
        });
        return Promise.resolve(result);
      }
    }, {
      key: 'signTransaction',
      value: function signTransaction(tx, passphrase, chain) {
        return Promise.resolve();
      }
    }, {
      key: 'importAccount',
      value: function importAccount(data, chain) {
        return Promise.resolve();
      }
    }, {
      key: 'unhideAccount',
      value: function unhideAccount(address, chain) {
        var accounts = this.accounts[chain] || [];
        var idx = accounts.findIndex(function (elem) {
          return elem.address === address;
        });
        if (idx >= 0) {
          this.accounts[chain][idx].hidden = false;
        }
        return Promise.resolve(true);
      }
    }, {
      key: 'hideAccount',
      value: function hideAccount(address, chain) {
        var accounts = this.accounts[chain] || [];
        var idx = accounts.findIndex(function (elem) {
          return elem.address === address;
        });
        if (idx >= 0) {
          this.accounts[chain][idx].hidden = true;
        }
        return Promise.resolve(true);
      }
    }, {
      key: 'exportAccount',
      value: function exportAccount(address, chain) {
        var accounts = this.accounts[chain] || [];
        var idx = accounts.findIndex(function (elem) {
          return elem.address === address;
        });
        if (idx >= 0) {
          return Promise.resolve(this.accounts[chain][idx].V3);
        }
        return Promise.resolve('');
      }
    }, {
      key: 'updateAccount',
      value: function updateAccount(address, name) {
        var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var chain = arguments[3];

        return Promise.resolve();
      }
    }, {
      key: 'newAccount',
      value: function newAccount(passphrase, name, description, chain) {
        var newAccount = _ethereumjsWallet2.default.generate();
        var address = '0x' + newAccount.getAddress().toString('hex');
        var accountData = {
          address: address,
          name: name,
          description: description,
          V3: newAccount.toV3(passphrase),
          hidden: false,
          hardware: false
        };

        this.accounts[chain] = this.accounts[chain] || [];
        this.accounts[chain].push(accountData);

        return Promise.resolve(address);
      }
    }, {
      key: 'generateMnemonic',
      value: function generateMnemonic() {
        return Promise.reject(new Error('NOT IMPLEMENTED'));
      }
    }, {
      key: 'importMnemonic',
      value: function importMnemonic(passphrase, name, description, mnemonic, chain) {
        return Promise.reject(new Error('NOT IMPLEMENTED'));
      }
    }, {
      key: 'importContract',
      value: function importContract(address, name, abi, chain) {
        var contractData = {
          address: address,
          name: name
        };
        this.contracts[chain] = this.contracts[chain] || [];
        this.contracts[chain].push(contractData);
        return Promise.resolve(true);
      }
    }, {
      key: 'listContracts',
      value: function listContracts(chain) {
        var contracts = this.contracts[chain] || [];
        var result = contracts.map(function (a) {
          return {
            address: a.address,
            name: a.name
          };
        });
        return Promise.resolve(result);
      }
    }]);

    return InMemoryProvider;
  }();

  exports.default = InMemoryProvider;
});