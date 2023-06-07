const analyzeArray = arr => {
  const length = arr.length;
  const sum = arr.reduce((accumulator, element) => accumulator + element, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = analyzeArray;
