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
    global.Ledger = mod.exports;
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

  var Ledger = function Ledger(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M8.84210526,0 L18.0091986,0 C21.3178269,0 24,2.69246141 24,5.99080136 L24,15.1578947 L8.84210526,15.1578947 L8.84210526,0 Z M0,3.15789474 C0,1.41383763 1.41738644,0 3.15789474,0 L6.31578947,0 L6.31578947,6.31578947 L0,6.31578947 L0,3.15789474 Z M0,20.8421053 L0,17.6842105 L6.31578947,17.6842105 L6.31578947,24 L3.15789474,24 C1.41738644,24 0,22.5861624 0,20.8421053 Z M24,20.8421053 C24,22.5861624 22.5826136,24 20.8421053,24 L17.6842105,24 L17.6842105,17.6842105 L24,17.6842105 L24,20.8421053 Z M0,8.84210526 L6.31578947,8.84210526 L6.31578947,15.1578947 L0,15.1578947 L0,8.84210526 Z M8.84210526,17.6842105 L15.1578947,17.6842105 L15.1578947,24 L8.84210526,24 L8.84210526,17.6842105 Z' })
    );
  };

  exports.default = Ledger;
});