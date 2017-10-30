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
            _react2.default.createElement('path', { d: 'M0.1,12.7 C0.1,12.7 0.1,12.7 0.1,12.7 C0,12.5 0,12.4 0,12.4 C0,12.3 0,12.2 0.1,12.1 C0.1,12.1 0.1,12.1 0.1,12 C2.6,7.8 7.1,5.3 12,5.3 C16.9,5.3 21.4,7.8 23.9,12 C23.9,12 23.9,12 23.9,12.1 C23.9,12.2 24,12.3 24,12.4 C24,12.5 24,12.6 23.9,12.7 C23.9,12.7 23.9,12.8 23.9,12.8 C21.4,17 16.9,19.5 12,19.5 C7.1,19.5 2.6,16.9 0.1,12.7 Z M22.6,12.4 C20.3,8.8 16.3,6.6 12,6.6 C7.7,6.6 3.7,8.8 1.4,12.4 C3.7,16 7.7,18.2 12,18.2 C16.3,18.2 20.3,16 22.6,12.4 Z M12,16.4 C9.8,16.4 7.9,14.6 7.9,12.4 C7.9,10.2 9.7,8.4 12,8.4 C14.3,8.4 16.1,10.2 16.1,12.4 C16.1,14.6 14.2,16.4 12,16.4 Z M12,15.1 C13.5,15.1 14.8,13.9 14.8,12.4 C14.8,10.9 13.6,9.7 12,9.7 C10.4,9.7 9.2,10.9 9.2,12.4 C9.2,13.9 10.5,15.1 12,15.1 Z' })
        );
    };

    exports.default = Eye;
});