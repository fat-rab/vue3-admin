/*
 * @Description:
 * @Autor: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-07 11:00:37
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
            'registeredComponentsOnly': false,
            'ignores': []
        }],
        'vue/v-on-event-hyphenation': ['warn', 'always', {
            'autofix': true,
            'ignore': []
        }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': ['error',
            {
                multiline: {
                    delimiter: 'none'
                },
                singleline: {
                    delimiter: 'comma'
                }
            }],
        '@typescript-eslint/no-explicit-any': 'off',
        'space-before-function-paren': ['error', 'never'],
        'vue/array-bracket-spacing': 'error',
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/camelcase': 'error',
        'vue/comma-dangle': 'error',
        'vue/eqeqeq': 'error',
        'vue/key-spacing': 'error',
        'vue/match-component-file-name': 'error',
        'vue/object-curly-spacing': 'error',
        'no-useless-escape': 'off',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true, // Allow `const { props, state } = this`; false by default
                allowedNames: ['self'] // Allow `const self = this`; `[]` by default
            }
        ],
        'vue/attribute-hyphenation': 'off',
        'vue/custom-event-name-casing': 'off',
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 4
            },
            'multiline': {
                'max': 1
            }
        }],
        'vue/multi-word-component-names': ['off', {
            'ignores': ['template']
        }]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
