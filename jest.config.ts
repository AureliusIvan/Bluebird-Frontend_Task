const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // preset: 'ts-jest',
  // presets: ['next/babel'],
  presets: ["@babel/preset-typescript", "next/babel", "module:@babel/plugin-transform-typescript"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@styles(.*)$': '<rootDir>/styles$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
    // swipers
    "swiper/react": "swiper/react/swiper-react.js",
    "swiper/css": "swiper/swiper.min.css"

  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    //ignore swiper mjs
    '<rootDir>/node_modules/swiper/swiper-bundle.min.mjs',
    '<rootDir>/node_modules/(?!.*\\.mjs$)'
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
    'node_modules/(?!(swiper|ssr-window|dom7)/)',
  ],
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
