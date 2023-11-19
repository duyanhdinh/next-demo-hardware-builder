import type {Config} from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
    collectCoverage: true,
    // collectCoverageFrom: [
    //     `<rootDir>/src/**/*.(ts|tsx)`
    // ],
    setupFilesAfterEnv: [
        '<rootDir>/test.setup.ts'
    ],
};

export default createJestConfig(config);