import react from '@vitejs/plugin-react'
import { presetAttributify, presetIcons, presetUno, transformerAttributifyJsx } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetIcons(), presetUno(), presetAttributify()],
      transformers: [transformerAttributifyJsx()],
    }),
    react(),
  ],
})
