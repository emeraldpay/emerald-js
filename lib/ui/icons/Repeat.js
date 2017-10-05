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
            _react2.default.createElement('path', { d: 'M26.733 18.507a7.5 7.5 0 1 0-2.765 8.018l.596.803a8.5 8.5 0 1 1 3.147-9.034l.797-4.383.984.178-1.106 6.083-6.057-2.202.342-.94 4.062 1.477z' })
        );
    };

    exports.default = Repeat;
});