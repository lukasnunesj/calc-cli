/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    roots: ['<rootDir>/src'],
    clearMocks: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js',
        '!<rootDir>/src/**/{help,version,commandlist}.js'
    ],
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "node"
    ],
    testEnvironment: "node",
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },

};