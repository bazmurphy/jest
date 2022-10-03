// npm test reversestring

const reverseString = require("./reversestring");
// import reverseString from "./reversestring";

// toBeDefined -- is the function defined?
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined;
});

test("string Reverses", () => {
  expect(reverseString("hello")).toEqual("olleh")
});

// this fails, because of the Upper Case H, so we need to refactor our original function in the .js file
// and add the .toLowerCase() method
test("string Reverses with UpperCase", () => {
  expect(reverseString("Hello")).toEqual("olleh")
});