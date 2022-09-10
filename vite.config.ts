/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import path from 'path'
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
  ],
  test: {
    environment: 'jsdom',
  },
})
