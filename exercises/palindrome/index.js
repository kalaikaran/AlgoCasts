// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let strLength = str.length,
    middle = Math.ceil(strLength/2);
  for(let index = 0; index < middle; index++){
    if(str.charAt(index) !== str.charAt(strLength - 1 - index)){
        return false
    }
  }
  return true;
}

module.exports = palindrome;
