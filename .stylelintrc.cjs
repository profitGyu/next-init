/** @type {import('stylelint').Config} */

const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-styled-syntax',

  rules: {
    'scss/operator-no-unspaced': null,
    'scss/operator-no-newline-after': null,
    'media-query-no-invalid': null,
    'no-descending-specificity': null,
    'declaration-block-no-redundant-longhand-properties': null,
  },
};

module.exports = config;s