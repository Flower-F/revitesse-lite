# Revitesse Lite

It is a copy of [Vitesse Lite](https://github.com/antfu/vitesse-lite), but it uses React. All the configs always keep fresh.

## Features

- ⚡️ [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) + [Pnpm](https://pnpm.io/) + [ESBuild](https://esbuild.github.io/)
- 🗂 [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- 🎨 [UnoCSS](https://github.com/unocss/unocss) + [Sass](https://github.com/sass/sass)
- 😃 [Use icons from any icon sets with classes](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
- 🦾 [ESlint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Stylelint](https://stylelint.io/) + [Commitlint](https://commitlint.js.org/)
- ✅ [Vitest](https://vitest.dev/)
- ☁️ [Netlify](https://www.netlify.com/)

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/flower-f/revitesse-lite/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit flower-f/revitesse-lite my-revitesse-app
cd my-revitesse-app
git init # To make sure that the husky can work well
# If you use Linux system, you might need to execute 'chmod 777 ./.husky/*'
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
# If the UnoCSS extension doesn't work, close and restart the VSCode
```
