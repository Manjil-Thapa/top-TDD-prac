const caesarCipher = require('./caesarCipher');

describe('caesar cipher test', () => {
  test('encrypts the string by step of 1', () => {
    expect(caesarCipher('a', 1)).toBe('b');
  });

  test('encrypts the string by step of 5', () => {
    expect(caesarCipher('m', 5)).toBe('r');
  });

  test('encrypts the string by step of 1 for uppercase condition', () => {
    expect(caesarCipher('A', 1)).toBe('B');
  });
});
