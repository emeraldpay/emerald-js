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
        global.Eye = mod.exports;
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

    var Eye = function Eye(props) {
        return _react2.default.createElement(
            _SvgIcon2.default,
            props,
            _react2.default.createElement('path', { d: 'M.731 6.266a.502.502 0 0 1 0-.535 10.827 10.827 0 0 1 18.538 0 .502.502 0 0 1 0 .535 10.827 10.827 0 0 1-18.538 0zm17.526-.267a9.827 9.827 0 0 0-16.514 0 9.827 9.827 0 0 0 16.514 0zM10 9.106C8.254 9.106 6.835 7.717 6.835 6c0-1.72 1.42-3.108 3.165-3.108 1.746 0 3.165 1.389 3.165 3.108 0 1.718-1.42 3.107-3.165 3.107zm0-1c1.198 0 2.165-.946 2.165-2.107 0-1.162-.967-2.108-2.165-2.108s-2.165.946-2.165 2.108c0 1.161.967 2.107 2.165 2.107z', fill: '#595959', fillRule: 'nonzero' })
        );
    };

    exports.default = Eye;
});