/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import Unocss from 'unocss/vite';
import type { UserConfigExport } from 'vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

export default defineConfig(({ mode }) => {
  const options: UserConfigExport = {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      Unocss({}),
      react(),
      Pages(),
      legacy({
        targets: ['ie >= 11'],
      }),
      visualizer({
        open: false,
      }),
    ],
    test: {
      environment: 'happy-dom',
    },
  };

  if (mode === 'production') {
    options.esbuild = {
      drop: ['console', 'debugger'],
    };
    options.build = {
      minify: 'esbuild',
      target: 'ES2015',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      polyfillModulePreload: true,
      cssTarget: 'chrome61',
    };
  }

  return options;
});
