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
    global.Edit = mod.exports;
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

  var Edit = function Edit(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M15.1515817,5.53846154 L18.4615385,8.84841825 L21.7714952,5.53846154 L18.4615385,2.22850483 L15.1515817,5.53846154 Z M18.652714,11.2680986 L6.19117549,23.729637 C6.01806499,23.9027475 5.78327676,24 5.53846154,24 L0.923076923,24 C0.413275616,24 0,23.5867244 0,23.0769231 L0,18.4615385 C0,18.2167232 0.097252468,17.981935 0.270362971,17.8088245 L12.7319014,5.34728605 L17.8088245,0.270362971 C18.1693085,-0.0901209904 18.7537685,-0.0901209904 19.1142524,0.270362971 L23.729637,4.88574759 C24.090121,5.24623155 24.090121,5.83069153 23.729637,6.19117549 L18.652714,11.2680986 Z M1.84615385,18.8438894 L1.84615385,22.1538462 L5.15611056,22.1538462 L17.1561106,10.1538462 L13.8461538,6.84388944 L1.84615385,18.8438894 Z' })
    );
  };

  exports.default = Edit;
});