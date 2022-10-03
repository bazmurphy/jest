const reverseString = (string) => 
  string
    .toLowerCase() // we had to add this to pass the 3rd test in reversestring.test.js
    .split("")
    .reverse()
    .join("");

module.exports = reverseString;
// export default reverseString;