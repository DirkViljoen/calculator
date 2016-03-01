var calculator = function() {

    function add(v1, v2) {
        return v1 + v2;
    };

    function subtract(v1, v2) {
        return v1 - v2;
    };

    function multiply(v1, v2) {
        return v1 * v2;
    };

    function divide(v1, v2) {
        return v1 / v2 + 0;
    }

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };
};

module.exports = calculator;
