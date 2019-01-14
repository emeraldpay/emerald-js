(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'ethereumjs-abi', 'bignumber.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('ethereumjs-abi'), require('bignumber.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ethereumjsAbi, global.bignumber);
    global.index = mod.exports;
  }
})(this, function (exports, _ethereumjsAbi, _bignumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.functionToData = functionToData;
  exports.dataToParams = dataToParams;

  var _ethereumjsAbi2 = _interopRequireDefault(_ethereumjsAbi);

  var _bignumber2 = _interopRequireDefault(_bignumber);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Converts function input parameters to TX's data field.
   */
  function functionToData(func, inputs) {
    if (func) {
      var types = [];
      var values = [];
      func.inputs.forEach(function (input) {
        types.push(input.type);
        values.push(inputs[input.name]);
      });
      var data = Buffer.concat([_ethereumjsAbi2.default.methodID(func.name, types), _ethereumjsAbi2.default.rawEncode(types, values)]).toString('hex');
      return '0x' + data;
    }
    throw new Error('Invalid function ABI: ' + func);
  }

  function dataToParams(func, data) {
    var buffer = Buffer.from(data.replace('0x', ''), 'hex');
    var types = func.outputs.map(function (output) {
      return output.type;
    });
    var params = _ethereumjsAbi2.default.rawDecode(types, buffer);
    return func.outputs.map(function (o, i) {
      return {
        type: o.type,
        name: o.name,
        value: params[i] instanceof _bignumber2.default ? params[i].toString() : params[i]
      };
    });
  }

  exports.default = {
    functionToData: functionToData,
    dataToParams: dataToParams
  };
});