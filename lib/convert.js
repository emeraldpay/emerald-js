'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toNumber = toNumber;


/**
 * Convert hex string to number
 *
 * @param value
 * @returns {number}
 */
function toNumber(value) {
    if (value === null) {
        return 0;
    }
    if (typeof value !== 'string') {
        throw new Error('Invalid argument type ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
    }
    if (value === '0x') {
        return 0;
    }
    return parseInt(value.substring(2), 16);
}