module.exports = {
  transformIgnorePatterns: [
   'node_modules/(?!arkham)'
  ],
	collectCoverage: true,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleFileExtensions: ['js'],
	moduleNameMapper: {
    '^\\./style(\\.sass)?$': '<rootDir>/**/mock/css.js',
    '\\.(png|jpg)$': '<rootDir>/**/mock/css.js'
  }
};
