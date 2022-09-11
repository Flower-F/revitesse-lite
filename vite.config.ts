/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Unocss({}),
    react(),
    Pages(),
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
        'ahooks',
      ],
      dts: true,
      dirs: [
        './src/hooks',
      ],
    }),
    legacy({
      targets: ['ie >= 11'],
    }),
    visualizer({
      open: false,
    }),
  ],
  build: {
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
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  test: {
    environment: 'jsdom',
  },
})
