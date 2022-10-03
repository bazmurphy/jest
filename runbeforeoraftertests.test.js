// npm test runbeforeofaftertests

const functions = require("./functions");
// import functions from "./functions";

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

const initDatabase = () => console.log("Database Initialised...");
const closeDatabase = () => console.log("Database Closed...");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});