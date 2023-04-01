import nextJest from 'next-jest';

const createJestConfig = nextJest({
  dir: './'
});

const config = {
  testEnvironment: 'jest-environment-jsdom'
};

export default createJestConfig(config);
