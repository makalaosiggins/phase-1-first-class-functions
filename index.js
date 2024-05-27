function receivesAFunction(callback) {
    if (typeof callback === 'function') {
        callback();
    } else {
        console.error("Error: Argument is not a function.");
    }
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("Named function.");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function.");
    };
}