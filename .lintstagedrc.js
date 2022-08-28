module.exports = {
  "**/*.{js,jsx,tsx,ts}": ["pnpm eslint", "pnpm format", "git add ."],
  "**/*.{css,scss}": ["pnpm stylelint", "git add ."],
};
