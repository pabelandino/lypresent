module.exports = {
    root: true,
    extends: ['@react-native', 'plugin:prettier/recommended'],
    plugins: ['simple-import-sort'],
    rules: {
        'arrow-spacing': ['error', { before: true, after: true }],
        indent: ['error', 2, { SwitchCase: 1 }],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        semi: ['error', 'always'],
        'react-hooks/exhaustive-deps': 'off',
        'space-before-function-paren': 'off',
        'space-infix-ops': 'error',
        'react/no-unescaped-entities': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
        'eslint-disable-next-line': 'off',
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // Packages `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages.
                    ['^(@|components)(/.*|$)'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.test.js'],
            rules: {},
        },
    ],
};
