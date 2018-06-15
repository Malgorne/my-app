module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/setUpTests.js',
  transformIgnorePatterns: [
    'node_modules'
  ],
  collectCoverage: true,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^\\./style(\\.sass)?$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '^components(.*)': '<rootDir>/src/components$1',
    '^screens(.*)': '<rootDir>/src/screens$1'
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
