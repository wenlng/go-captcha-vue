import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
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
