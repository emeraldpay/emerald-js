// @flow

/**
 * Convert hex string to number
 *
 * @param value
 * @returns {number}
 */
export function toNumber(value: string): number {
    if (value === null) {
        return 0;
    }
    if (typeof value !== 'string') {
        throw new Error(`Invalid argument type ${typeof value}`);
    }
    if (value === '0x') {
        return 0;
    }
    return parseInt(value.substring(2), 16);
}
