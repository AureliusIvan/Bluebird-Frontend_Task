const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // preset: 'ts-jest',
  presets: ['next/babel'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@styles(.*)$': '<rootDir>/styles$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
    // swipers
    '^@swiper(.*)$': '<rootDir>/node_modules/swiper$1',
    "swiper/css": "swiper/swiper.min.css",
    
  },
  // testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jest-environment-jsdom',
  // // Adjust transform property to use ts-jest for TypeScript files
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    "^.+\\.(css|scss|sass|less)$": "jest-preview/transforms/css",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "jest-preview/transforms/file",
  },
};

module.exports = createJestConfig(customJestConfig);
