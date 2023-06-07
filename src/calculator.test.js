const calculator = require('./calculator');

describe('basic calculator operations', () => {
  test('addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('substraction', () => {
    expect(calculator.substract(2, 3)).toBe(-1);
  });

  test('division', () => {
    expect(calculator.divide(4, 4)).toBe(1);
    expect(calculator.divide(1, 2)).toBe(0.5);
    expect(calculator.divide(-1, 5)).toBe(-0.2);
  });

  test('mutiplication', () => {
    expect(calculator.multiply(2, 10)).toBe(20);
  });
});
