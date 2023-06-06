const capitalize = require('./capitalize');

test('capitalizes the first letter of a given string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('test')).toBe('Test');
});
