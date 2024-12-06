/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(1);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());