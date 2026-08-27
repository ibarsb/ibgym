import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const backend = process.env.API_TARGET || 'http://localhost:3000'
const media   = process.env.MEDIA_TARGET || 'http://localhost:8900'
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': { target: backend, changeOrigin: true },
      '/img': { target: media, changeOrigin: true },
      '/gif': { target: media, changeOrigin: true },
      '/media': { target: media, changeOrigin: true }
    }
  },
  build: { chunkSizeWarningLimit: 1500 }
})
