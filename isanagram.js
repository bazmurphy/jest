const isAnagram = (string1, string2) => formatString(string1) === formatString(string2);

// helper function
const formatString = (string) => 
  string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split("")
    .sort()
    .join("");

module.exports = isAnagram;
// export default isAnagram;