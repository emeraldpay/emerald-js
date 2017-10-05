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
        global.Repeat = mod.exports;
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

    var Repeat = function Repeat(props) {
        return _react2.default.createElement(
            _SvgIcon2.default,
            props,
            _react2.default.createElement('path', { d: 'M26.7327867,18.5071634 C25.8556069,15.3103859 22.9262172,13 19.5,13 C15.3578644,13 12,16.3578644 12,20.5 C12,24.6421356 15.3578644,28 19.5,28 C21.1326054,28 22.6848804,27.4776051 23.9674955,26.5248665 L24.5637948,27.3276287 C23.1101908,28.4073795 21.3492432,29 19.5,29 C14.8055796,29 11,25.1944204 11,20.5 C11,15.8055796 14.8055796,12 19.5,12 C23.4015978,12 26.7342976,14.6429703 27.7111083,18.2938195 L28.508065,13.9105573 L29.491935,14.0894427 L28.3859471,20.1723762 L22.3291285,17.9698967 L22.6708715,17.0301033 L26.7327867,18.5071634 Z' })
        );
    };

    exports.default = Repeat;
});