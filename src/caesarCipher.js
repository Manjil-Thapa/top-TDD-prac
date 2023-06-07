const caesarCipher = str => {
  let solved = '';
  for (let i = 0; i < str.length; i++) {
    const asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
    }
  }
  return solved;
};

module.exports = caesarCipher;