/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(a) {
            if (a === val) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(b) {
            if (b !== val) {
                return true;
            }
            throw new Error("Equal");
        }
    }
};