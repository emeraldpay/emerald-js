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
        global.Ledger = mod.exports;
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

    var Ledger = function Ledger(props) {
        return _react2.default.createElement(
            _SvgIcon2.default,
            props,
            _react2.default.createElement('path', { d: 'M5.158 0h4.42A4.424 4.424 0 0 1 14 4.421v4.421H5.158V0zM0 1.842C0 .825.818 0 1.842 0h1.842v3.684H0V1.842zm0 10.316v-1.842h3.684V14H1.842A1.838 1.838 0 0 1 0 12.158zm14 0A1.838 1.838 0 0 1 12.158 14h-1.842v-3.684H14v1.842zm-14-7h3.684v3.684H0V5.158zm5.158 5.158h3.684V14H5.158v-3.684z' })
        );
    };

    exports.default = Ledger;
});