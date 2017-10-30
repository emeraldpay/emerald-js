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
            _react2.default.createElement('path', { d: 'M20.4190033,9.4454072 C19.280544,5.29642776 15.4785972,2.2978631 11.0318363,2.2978631 C5.65591136,2.2978631 1.2978631,6.65591136 1.2978631,12.0318363 C1.2978631,17.4077613 5.65591136,21.7658096 11.0318363,21.7658096 C13.1507346,21.7658096 15.1653751,21.0878125 16.8300339,19.8512883 L17.6039488,20.8931637 C15.7173698,22.2945324 13.4319008,23.0636727 11.0318363,23.0636727 C4.93912137,23.0636727 1.77635684e-15,18.1245513 1.77635684e-15,12.0318363 C1.77635684e-15,5.93912137 4.93912137,1 11.0318363,1 C16.0955762,1 20.4209643,4.43021359 21.6887308,9.16851601 L22.7230715,3.47964179 L24,3.7118106 L22.5645791,11.6066255 L14.7036578,8.74810864 L15.1471935,7.52838544 L20.4190033,9.4454072 Z' })
        );
    };

    exports.default = Repeat;
});