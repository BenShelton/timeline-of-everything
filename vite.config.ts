import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

function resolve (...dirs: string[]): string {
  return path.resolve(__dirname, ...dirs)
}

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    vue()
  ]
})
