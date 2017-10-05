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
            _react2.default.createElement('path', { d: 'M9.5 8.793l3.646-3.647.708.708L10.207 9.5l3.647 3.646-.708.708L9.5 10.207l-3.646 3.647-.708-.708L8.793 9.5 5.146 5.854l.708-.708L9.5 8.793zM9.5 19a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19zm0-1a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z' })
        );
    };

    exports.default = Delete;
});