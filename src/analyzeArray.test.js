const analyzeArray = require('./analyzeArray');

test('takes an array of numbers and returns', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('takes an array of numbers and returns2', () => {
  expect(analyzeArray([4, 4, 4, 4])).toEqual({
    average: 4,
    min: 4,
    max: 4,
    length: 4,
  });
});
