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
    global.Close = mod.exports;
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

  var Close = function Close(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M12,10.6644826 L1.33551744,0 L0,1.33551744 L10.6644826,12 L0,22.6644826 L1.33551744,24 L12,13.3355174 L22.6644826,24 L24,22.6644826 L13.3355174,12 L24,1.33551744 L22.6644826,0 L12,10.6644826 Z' })
    );
  };

  exports.default = Close;
});