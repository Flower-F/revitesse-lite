module.exports = {
  '**/*.{js,jsx,tsx,ts}': ['pnpm eslint', 'git add .'],
  '**/*.{css,scss}': ['pnpm stylelint', 'git add .'],
}
