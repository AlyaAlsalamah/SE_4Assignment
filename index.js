module.exports.add = add;
module.exports.multiply = multiply;
module.exports.subtract = subtract;
module.exports.divide = divide;
module.exports.power = power;
module.exports.factorial = factorial;
module.exports.modolo = modolo;
module.exports.check_odd_number = check_odd_number;
module.exports.even = even;
module.exports.isEqual = isEqual;

function add(...number) {
    let sum = 0;
    number.forEach(x => sum += x);
    return summ;
}

function multiply(...number) {
    sum = 1
    number.forEach(x => sum *= x);
    return sum
}

function subtract(number1, number2) {
console.log("The subtraction is:")
    return number1 - number2
}

function divide(number1, number2) {
    console.log("Please Stick to the test content .")
    return number1 / number2
}

function power(base, power) {
    return base ** power
}


function factorial(number) {
    sum = 1
    for (let i = number; i > 0 ; i--) {
        sum *= i
    }
    console.log("Factorial sum")
    return sum
}

function modolo(number1, number2) {
	return number1 % number2;
}

function check_odd_number(number) {
    if (number % 2 != 0) {
        return true
    }
    return false
}

function even(number) {
	if(number % 2 == 0) {
		return "even"
	}
}

function isEqual(number1, number2) {
	if(number1 == number2) {
		return true
	}
	return false
}
