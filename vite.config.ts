import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import scriptSetup from 'unplugin-vue2-script-setup/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
      jsx: true
    }),
    scriptSetup(),
  ],
  resolve: {
    alias: {
      'packages': fileURLToPath(new URL('./packages', import.meta.url)),
      '@': fileURLToPath(new URL('./packages', import.meta.url)),
    }
  },
  server: {
    port: 3001
  },
  build: {
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: 'packages/index.ts',
      name: 'go-captcha-vue',
      fileName: (format) => `go-captcha-vue.${format}.js`,
    },
  }
})
