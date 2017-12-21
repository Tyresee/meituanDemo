// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': 0,
    'no-new': 0,
    'space-before-function-paren': 0,
    'no-mixed-spaces-and-tabs': 0 ,
    'no-tabs': 0 ,
    'semi': 0 ,
    'no-trailing-spaces ': 0,
    'quotes': 0

  }
}
