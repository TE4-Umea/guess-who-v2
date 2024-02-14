module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'xo',
        'plugin:vue/vue3-essential',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        semi: [
            0,
            'always',
        ],
        'object-curly-spacing': [
            0,
            'always',
        ],
        indent: [
            2,
            4,
        ],
        // quotes: [
        //     'error',
        //     'double',
        // ],
    },
};
