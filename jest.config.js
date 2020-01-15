// @ts-nocheck
const tsconfig = require("./tsconfig.json");

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/types/**/*.ts",
    "!src/actions/**/*.ts",
    "!src/constants.ts",
    "!src/index.ts"
  ],
  coverageReporters: ["lcov", "json", "cobertura"],
  moduleFileExtensions: ["ts", "js"],
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["<rootDir>/lib"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  // testResultsProcessor: './node_modules/jest-junit-reporter',
  notify: true,
  bail: true
};
