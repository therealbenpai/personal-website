import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt()
    .override('nuxt/javascript', {
        rules: {
            'camelcase': ['warn', { properties: 'never' }],
            'curly': 'warn',
            'dot-notation': 'warn',
            'eqeqeq': 'warn',
            'no-constant-condition': 'warn',
            'no-empty': 'warn',
            'no-irregular-whitespace': 'warn',
            'no-prototype-builtins': 'warn',
            'no-template-curly-in-string': 'warn',
            'no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrors: 'none',
            }],
            'no-useless-escape': 'warn',
            'no-useless-rename': 'warn',
            'object-shorthand': 'warn',
            'prefer-template': 'warn',
        },
    })
    .override('nuxt/typescript/rules', {
        rules: {
            'prefer-const': 'warn',
            '@typescript-eslint/no-dynamic-delete': 'warn',
            '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-extraneous-class': 'warn',
            '@typescript-eslint/no-this-alias': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrors: 'none',
            }],
        },
    })
    .override('nuxt/import/rules', {
        rules: {
            'import/extensions': ['error', 'ignorePackages'],
            'import/no-useless-path-segments': 'error',
            'import/order': ['error', {
                'newlines-between': 'always',
                'alphabetize': { order: 'asc', orderImportKind: 'desc' },
            }],
        },
    })
    .override('nuxt/stylistic', (config) => ({
        ...config,
        rules: {
            ...Object.fromEntries(Object.entries(config.rules ?? {}).map(([ruleName, ruleEntry]) => {
                // @ts-ignore
                return [ruleName, typeof ruleEntry === 'string' ? 'warn' : ['warn', ...ruleEntry.slice(1)]];
            })),
            '@stylistic/array-bracket-newline': ['warn', 'consistent'],
            '@stylistic/array-element-newline': ['warn', 'consistent'],
            '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
            '@stylistic/function-call-spacing': 'warn',
            '@stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
            '@stylistic/implicit-arrow-linebreak': 'warn',
            '@stylistic/linebreak-style': 'warn',
            '@stylistic/max-len': ['warn', { code: 120 }],
            '@stylistic/newline-per-chained-call': 'warn',
            '@stylistic/no-extra-semi': 'warn',
            '@stylistic/no-mixed-operators': ['warn', {
                groups: [['&&', '||']],
            }],
            '@stylistic/object-curly-newline': 'warn',
            '@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/one-var-declaration-per-line': 'warn',
            '@stylistic/operator-linebreak': 'warn',
            '@stylistic/switch-colon-spacing': 'warn',
        },
    }))
    .override('nuxt/vue/rules', {
        rules: {
            'vue/first-attribute-linebreak': ['warn', { singleline: 'beside' }],
            'vue/html-self-closing': ['warn', { html: { normal: 'never' } }],
            'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
            'vue/multi-word-component-names': 'off',
            'vue/no-mutating-props': 'warn',
            'vue/require-v-for-key': 'warn',
            'vue/singleline-html-element-content-newline': ['warn', { externalIgnores: ['T', 'nuxt-link'] }],
            'vue/valid-template-root': 'warn',
            'vue/valid-v-for': 'warn',
            'vue/array-bracket-newline': ['warn', 'consistent'],
            'vue/array-element-newline': ['warn', 'consistent'],
            'vue/camelcase': ['warn', { properties: 'never' }],
            'vue/dot-location': ['warn', 'property'],
            'vue/dot-notation': 'warn',
            'vue/eqeqeq': 'warn',
            'vue/multiline-ternary': ['warn', 'always-multiline'],
            'vue/no-empty-pattern': 'warn',
            'vue/no-loss-of-precision': 'warn',
            'vue/no-sparse-arrays': 'warn',
            'vue/object-curly-newline': 'warn',
            'vue/object-shorthand': 'warn',
            'vue/operator-linebreak': 'warn',
            'vue/prefer-template': 'warn',
            'vue/space-infix-ops': 'warn',
            'vue/space-unary-ops': 'warn',
        },
    });

