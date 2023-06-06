const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('substracts two numbers', () => {
  expect(calculator.substract(2, 3)).toBe(-1);
});

test('divides two input parameters', () => {
  expect(calculator.divide(4, 4)).toBe(1);
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.divide(-1, 5)).toBe(-0.2);
});

test('mutiplies two input parameters', () => {
  expect(calculator.multiply(2, 10)).toBe(20);
});
