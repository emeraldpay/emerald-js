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
    global.QrCode = mod.exports;
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

  var QrCode = function QrCode(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M1.71428571,1.71428571 L1.71428571,6.85714286 L6.85714286,6.85714286 L6.85714286,1.71428571 L1.71428571,1.71428571 Z M8.57142857,0 L8.57142857,8.57142857 L0,8.57142857 L0,0 L8.57142857,0 Z M24,0 L24,8.58671522 L15.4285714,8.58671522 L15.4285714,0 L24,0 Z M17.1428571,1.71428571 L17.1428571,6.85714286 L22.2857143,6.85714286 L22.2857143,1.71428571 L17.1428571,1.71428571 Z M0,15.4285714 L8.57142857,15.4285714 L8.57142857,24 L0,24 L0,15.4285714 Z M1.71428571,17.1428571 L1.71428571,22.2857143 L6.85714286,22.2857143 L6.85714286,17.1428571 L1.71428571,17.1428571 Z M3.42857143,11.1734304 L11.1428571,11.1734304 L11.1428571,3.42857143 L12.8571429,3.42857143 L12.8571429,12.8877162 L3.42857143,12.8877162 L3.42857143,11.1734304 Z M22.2857143,11.1734304 L22.2857143,12.8877162 L15.4285714,12.8877162 L15.4285714,11.1734304 L22.2857143,11.1734304 Z M13.7142857,17.1428571 L13.7142857,20.5714286 L12,20.5714286 L12,15.4285714 L24,15.4285714 L24,24 L15.4285714,24 L15.4285714,22.2857143 L22.2857143,22.2857143 L22.2857143,17.1428571 L13.7142857,17.1428571 Z' })
    );
  };

  exports.default = QrCode;
});