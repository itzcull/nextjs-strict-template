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
  },
}
