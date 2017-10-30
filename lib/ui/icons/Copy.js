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
        global.Copy = mod.exports;
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

    var Copy = function Copy(props) {
        return _react2.default.createElement(
            _SvgIcon2.default,
            props,
            _react2.default.createElement('path', { d: 'M7.38461538,14.7692308 L7.38461538,8.30769231 C7.38461538,7.797891 7.797891,7.38461538 8.30769231,7.38461538 L14.7692308,7.38461538 L14.7692308,1.84615385 L1.84615385,1.84615385 L1.84615385,14.7692308 L7.38461538,14.7692308 Z M7.38461538,16.6153846 L0.923076923,16.6153846 C0.413275616,16.6153846 0,16.202109 0,15.6923077 L8.19857003e-16,0.923076923 C8.19857003e-16,0.413275616 0.413275616,0 0.923076923,0 L15.6923077,0 C16.202109,0 16.6153846,0.413275616 16.6153846,0.923076923 L16.6153846,7.38461538 L23.0769231,7.38461538 C23.5867244,7.38461538 24,7.797891 24,8.30769231 L24,23.0769231 C24,23.5867244 23.5867244,24 23.0769231,24 L8.30769231,24 C7.797891,24 7.38461538,23.5867244 7.38461538,23.0769231 L7.38461538,16.6153846 Z M9.23076923,22.1538462 L22.1538462,22.1538462 L22.1538462,9.23076923 L9.23076923,9.23076923 L9.23076923,22.1538462 Z' })
        );
    };

    exports.default = Copy;
});