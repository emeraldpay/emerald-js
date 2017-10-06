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
            _react2.default.createElement('path', { d: 'M1 1v3h3V1H1zm4-1v5H0V0h5zm9 0v5.009H9V0h5zm-4 1v3h3V1h-3zM0 9h5v5H0V9zm1 1v3h3v-3H1zm1-3.482h4.5V2h1v5.518H2v-1zm11 0v1H9v-1h4zM8 10v2H7V9h7v5H9v-1h4v-3H8z' })
        );
    };

    exports.default = QrCode;
});