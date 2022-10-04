// npm test runbeforeofaftertests

const functions = require("./functions");
// import functions from "./functions";

// --- BEFORE EACH 
// to run before each test
beforeEach(() => initDatabase());
// to run after each test
afterEach(() => closeDatabase());

// --- BEFORE ALL
// to run once before all the tests start
beforeAll(() => initDatabase());
// to run once after all the tests finish
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database Initialised...");
const closeDatabase = () => console.log("Database Closed...");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Check the value of 2 to be 2", () => {
  expect(functions.checkValue(2)).toEqual(2);
});

// --- DESCRIBE 
// You can also target certain tests, instead of before and after each one, or before and after all 
// You use describe() for this
// It should run the nameCheck function ONLY before these two tests since they are inside the describe BLOCK

const nameCheck = () => console.log("Checking Name...")

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user ="Jeff";
    expect(user).toBe("Jeff");
  }) 

  test("User is Karen", () => {
    const user ="Karen";
    expect(user).toBe("Karen");
  })
});

// These are the three for any kind of functionality you want to run before all tests, before each test, or a certain group of tests