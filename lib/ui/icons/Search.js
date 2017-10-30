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
        global.Search = mod.exports;
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

    var Search = function Search(props) {
        return _react2.default.createElement(
            _SvgIcon2.default,
            props,
            _react2.default.createElement('path', { d: 'M13.5815273,12.8744205 L16.6131546,15.9060478 L15.9060478,16.6131546 L12.8744205,13.5815273 C11.8290793,14.4664216 10.4768516,15 9,15 C5.6862915,15 3,12.3137085 3,9 C3,5.6862915 5.6862915,3 9,3 C12.3137085,3 15,5.6862915 15,9 C15,10.4768516 14.4664216,11.8290793 13.5815273,12.8744205 Z M9,14 C11.7614237,14 14,11.7614237 14,9 C14,6.23857625 11.7614237,4 9,4 C6.23857625,4 4,6.23857625 4,9 C4,11.7614237 6.23857625,14 9,14 Z' })
        );
    };

    exports.default = Search;
});