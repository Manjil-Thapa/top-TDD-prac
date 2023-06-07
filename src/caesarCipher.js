const caesarCipher = (str, key) => {
  const chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    char = shiftChar(char, key);
    chars[i] = char;
  }
  return chars.join('');
};

function shiftChar(char, key) {
  // uppercase condition
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
  }
  // lowercase condition
  else if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97);
  }
  return char;
}
module.exports = caesarCipher;
