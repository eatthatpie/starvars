module.exports = {
  globals: {
    window: {}
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@\/(.*)$": "<rootDir>/src/$1"
  }
};
