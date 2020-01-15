// @ts-nocheck
const tsconfig = require("./tsconfig.json");

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    "src/entities/*.ts"
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
