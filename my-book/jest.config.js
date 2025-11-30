module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testMatch: ['<rootDir>/src/**/?(*.)test.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\.css$': '<rootDir>/cssTransform.js',
    '^(?!.*\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/fileTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(docusaurus)/)',
  ],
  moduleNameMapper: {
    '^@site/(.*)$': '<rootDir>/src/$1',
    '^@generated/(.*)$': '<rootDir>/.docusaurus/$1',
    '^@docusaurus/(.+)$': '<rootDir>/node_modules/@docusaurus/$1',
    '^.+\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
