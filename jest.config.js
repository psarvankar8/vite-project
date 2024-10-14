module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files
      '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript files
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore specific paths
  };
  