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
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@components/(.*)': '<rootDir>/src/client/components/$1',
    '^@app/(.*)': '<rootDir>/src/client/app/$1',
    '^@config/(.*)': '<rootDir>/src/config/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@server/(.*)': '<rootDir>/src/server/$1',
    '^@sidebar/(.*)': '<rootDir>/src/client/app/sidebar/$1',
    '^@genericState/(.*)': '<rootDir>/src/client/genericState/$1',
    '^@styles/(.*)': '<rootDir>/src/client/styles/$1',
    '^@client/(.*)': '<rootDir>/src/client/$1',
    '^@public/(.*)': '<rootDir>/public/$1',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
};
