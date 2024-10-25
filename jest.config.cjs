module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(query-string)/)', // Procesa 'query-string' con Babel
    ],
    setupFiles: ['./jest.setup.js']
};
