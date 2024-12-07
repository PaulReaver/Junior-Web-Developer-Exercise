module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {},

    rules: {
        'import/extensions': [
            'error',
            {
                js: 'ignorePackages',
            },
        ],
    },
};
