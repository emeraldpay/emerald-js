(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'material-ui/SvgIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('material-ui/SvgIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SvgIcon);
    global.Search = mod.exports;
  }
})(this, function (exports, _react, _SvgIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Search = function Search(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M18.6552392,17.4086095 L24,22.7533703 L22.7533703,24 L17.4086095,18.6552392 C15.5656724,20.2153083 13.1816941,21.1560075 10.5780037,21.1560075 C4.73593358,21.1560075 1.77635684e-15,16.4200739 1.77635684e-15,10.5780037 C1.77635684e-15,4.73593358 4.73593358,0 10.5780037,0 C16.4200739,0 21.1560075,4.73593358 21.1560075,10.5780037 C21.1560075,13.1816941 20.2153083,15.5656724 18.6552392,17.4086095 Z M10.5780037,19.3930068 C15.4463955,19.3930068 19.3930068,15.4463955 19.3930068,10.5780037 C19.3930068,5.70961194 15.4463955,1.76300062 10.5780037,1.76300062 C5.70961194,1.76300062 1.76300062,5.70961194 1.76300062,10.5780037 C1.76300062,15.4463955 5.70961194,19.3930068 10.5780037,19.3930068 Z' })
    );
  };

  exports.default = Search;
});