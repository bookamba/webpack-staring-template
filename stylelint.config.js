const stylelint = require('stylelint')

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'rule-empty-line-before': null,
    'custom-property-pattern': null,
    'block-no-empty': null,
    'at-rule-empty-line-before': null,
    'font-family-name-quotes': null,
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/double-slash-comment-empty-line-before': null,
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'comment-whitespace-inside': null,
    'scss/dollar-variable-empty-line-before': null,
  },
}
