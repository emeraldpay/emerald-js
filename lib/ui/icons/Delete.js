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
    global.Delete = mod.exports;
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

  var Delete = function Delete(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M12,11.1068125 L16.6060378,6.50077466 L17.4992253,7.39396218 L12.8931875,12 L17.4992253,16.6060378 L16.6060378,17.4992253 L12,12.8931875 L7.39396218,17.4992253 L6.50077466,16.6060378 L11.1068125,12 L6.50077466,7.39396218 L7.39396218,6.50077466 L12,11.1068125 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22.7368421 C17.9297942,22.7368421 22.7368421,17.9297942 22.7368421,12 C22.7368421,6.07020584 17.9297942,1.26315789 12,1.26315789 C6.07020584,1.26315789 1.26315789,6.07020584 1.26315789,12 C1.26315789,17.9297942 6.07020584,22.7368421 12,22.7368421 Z' })
    );
  };

  exports.default = Delete;
});