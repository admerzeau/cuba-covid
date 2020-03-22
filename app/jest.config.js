module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/$1',
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      lines: 80,
    },
  },
}
