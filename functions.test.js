// npm test functions

const functions = require("./functions");

// toBe
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toBeTruthy
test("Should be truthy", () => {
  expect(functions.checkValue(2)).toBeTruthy();
});


// toBe is for PRIMITIVE TYPES ONLY NOT REFERENCE/COMPLEX TYPES
// test("User should be Brad Traversy object", () => {
//   expect(functions.createUser()).toBe({
//     firstName: 'Baz', 
//     lastName: 'Murphy'
//   });
// });

// toEqual
test("User should be Baz Murphy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Baz', 
    lastName: 'Murphy'
  });
});

// toBeLessThan
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// toBeLessThanOrEqual
test("Should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// toBeGreaterThan 

// tobeGreaterThanOrEqual

// toMatch - REGEX
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});


// toContain -- ARRAYS
test("Admin should be in usernames array", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});


// Working with ASYNC DATA
// we need to add .assertions() after expect
// and then the number of assertions we expect which is 1
// expect assertions verifies that a certain number of assertions are called which in this case is 1
// this is used in testing asynchronous code in order to make sure 
// that the assertions in a callback or in this case the .then of a promise actually get called

// you need to RETURN THE PROMISE, because if you don't the test will complete before the fetch 
// or in this case the axios.get completes

// PROMISE VERSIONS
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual("Leanne Graham");
    });
});

// WITHOUT assertions >>> PASS..? Why?
test("WITHOUT ASSERTIONS: User fetched name should be Leanne Graham", () => {
  // expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual("Leanne Graham");
    });
});

// WITHOUT assertions AND WITHOUT return statement - PASS..? Why?
test("WITHOUT ASSERTIONS and WITHOUT RETURN: User fetched name should be Leanne Graham", () => {
  // expect.assertions(1);
  functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual("Leanne Graham");
    });
});


// ASYNC AWAIT VERSION
test("ASYNC AWAIT - User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
