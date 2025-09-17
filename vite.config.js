import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/parking/',
  server: {
    port: 5173,
    open: true
  }
})
