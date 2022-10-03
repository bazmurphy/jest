// const axios = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    // add: (num1, num2) => num1 + num2 + 1,
    isNull: () => null,
    // isNull: () => undefined,
    checkValue: x => x,
    createUser: () => {
      const user = { firstName: 'Baz' }
      user['lastName'] = 'Murphy';
      return user;
    },
  // fetchUserViaAxios : () => axios.get("https://jsonplaceholder.typicode.com/users/1")
  //   .then(response => response.data)
  //   .catch(error => "error"),
    fetchUser : () => fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .catch(error => "error"),
};

module.exports = functions;
// export default functions;