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
        global.Edit = mod.exports;
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

    var Edit = function Edit(props) {
        return _react2.default.createElement(
            _SvgIcon2.default,
            props,
            _react2.default.createElement('path', { d: 'M12.207 7L14 8.793 15.793 7 14 5.207 12.207 7zm1.897 3.104l-6.75 6.75A.5.5 0 0 1 7 17H4.5a.5.5 0 0 1-.5-.5V14a.5.5 0 0 1 .146-.354l6.75-6.75 2.75-2.75a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.75 2.75zM5 14.207V16h1.793l6.5-6.5L11.5 7.707l-6.5 6.5z' })
        );
    };

    exports.default = Edit;
});