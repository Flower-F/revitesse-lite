/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import type { AliasOptions, UserConfigExport } from 'vite';
import { defineConfig } from 'vite';

const ReactCompilerConfig = {
  sources: (filename: string) => {
    return filename.indexOf('src/') !== -1;
  },
};

const AliasConfig: AliasOptions = {
  '~/': `${path.resolve(__dirname, 'src')}/`,
};

export default defineConfig(({ mode }) => {
  const options: UserConfigExport = {
    resolve: {
      alias: AliasConfig,
    },
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
        },
      }),
      legacy(),
      visualizer({
        open: false,
      }),
    ],
    test: {
      environment: 'happy-dom',
      alias: AliasConfig,
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
          manualChunks(id) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
          },
        },
      },
      polyfillModulePreload: true,
      cssTarget: 'chrome61',
    };
  }

  return options;
});
