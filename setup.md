Setting Up Jest:
1. npm init
2. npm install jest
3. package.json EDIT:
  "scripts": {
    "test": "jest"
  },
4. to use watch mode
package.json EDIT:
  "scripts": {
    "test": "jest",
    "testwatch": "jest --watchAll"
  },
5. npm run testwatch