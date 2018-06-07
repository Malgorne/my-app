module.exports = {
  transformIgnorePatterns: [
    'node_modules'
  ],
  collectCoverage: true,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^\\./style(\\.sass)?$': 'identity-obj-proxy'
  }
};
