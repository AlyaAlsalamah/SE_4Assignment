const {add, multiply, subtract, divide, power, factorial, modolo, even, check_odd_number, isEqual} = require("./")

test('adding', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiplying', () => {
    expect(multiply(2, 4)).toBe(8);
});

test('subtracting', () => {
    expect(subtract(10, 2)).toBe(8);
});

test('dividing', () => {
    expect(divide(16, 4)).toBe(4);
});

test('power', () => {
    expect(power(2, 4)).toBe(16);
});

test('factorial', () => {
    expect(factorial(4)).toBe(24);
});

test('modolo', () => {
    expect(modolo(10, 3)).toBe(1); 
});

test('check_odd_number', () => {
    expect(check_odd_number(1)).toBe(true);
});

test('even', () => {
    expect(even(2)).toBe("even"); 
});

test('isEqual', () => {
    expect(isEqual(10, 10)).toBe(true); 
});