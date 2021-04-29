module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      enableTsDiagnostics: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
};
