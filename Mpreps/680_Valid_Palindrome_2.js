const validPalindrome = function (str, count = 0) {
  let [i, j] = [0, str.length - 1];

  while (i <= j) {
    if (str[i] != str[j] && count < 1) {
      return (
        validPalindrome(str.substring(i + 1, j + 1), count + 1) ||
        validPalindrome(str.substring(i, j), count + 1)
      );
    } else if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

module.exports = validPalindrome;
