const caesarCipher = require('./caesarCipher');

describe('caesar cipher test', () => {
  test('lowercase test with a shift of 1', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
  });

  test('lowercase test with a shift of 5', () => {
    expect(caesarCipher('testing', 5)).toBe('yjxynsl');
  });

  test('combination test for uppercase and lower case', () => {
    expect(caesarCipher('Hello World', 2)).toBe('Jgnnq Yqtnf');
  });
});
