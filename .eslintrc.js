module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        tabs: true,
        singleQuote: true,
        semi: false,
        arrowParens: 'always',
        bracketSpacing: true,
        jsxSingleQuote: false,
      },
    ],
    quotes: [2, 'single'],
    'constructor-super': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'getter-return': 2,
    'for-direction': 2,
    'no-dupe-args': 2,
    eqeqeq: [2, 'smart'],
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-redeclare': 2,
    'no-self-assign': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, { args: 'none' }],
  },
}
