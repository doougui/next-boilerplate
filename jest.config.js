module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.@(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
