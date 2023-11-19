module.exports = {
  '**/*.{js,jsx,tsx,ts}': ['eslint --fix', 'prettier --write'],
  '**/*.{css,scss}': ['stylelint --fix'],
};
