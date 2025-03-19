function multiplyNumbers(a, b) {
    return Math.multiply.apply(null, [a, b]); 
}

let mathOperations = {
    multiply: function(a, b) {
        return a * b
    }
};

let result = mathOperations.multiply.apply(null, [5, 3])
console.log(result)