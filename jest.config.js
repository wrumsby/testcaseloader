module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: 'src/.*.test.ts$',
  collectCoverageFrom: ['src/**.ts', '!src/index.ts']
};
