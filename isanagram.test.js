// npm test isanagram

const isAnagram = require("./isanagram");
// import isAnagram from "./isanagram";

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("'cinema' is an anagram of 'iceman'", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("'Dormitory' is an anagram of 'dirty room##'", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test("'Hello' is not an anagram of 'Aloha'", () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});