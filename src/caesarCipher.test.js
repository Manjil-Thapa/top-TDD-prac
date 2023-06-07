const caesarCipher = require('./caesarCipher');

test('encrypts the string ', () => {
  expect(caesarCipher('A')).toBe('N');
});
