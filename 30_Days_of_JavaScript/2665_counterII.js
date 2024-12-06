/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const ORIGINAL_VALUE = init;
    return {
        increment: function() {
            return ++init;
        },
        decrement: function() {
            return --init;
        },
        reset: function() {
            return init = ORIGINAL_VALUE;
        }
    }
};

const counterII = createCounter(5);
console.log(counterII.increment())
console.log(counterII.reset())
console.log(counterII.decrement())