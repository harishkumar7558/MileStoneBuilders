import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// Long-lived vendor chunks: they change far less often than app code, so they stay cached across deploys.
const VENDOR_CHUNKS = [
  { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|@remix-run)[\\/]/ },
  { name: 'motion', test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/ },
  { name: 'radix', test: /node_modules[\\/]@radix-ui[\\/]/ },
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        advancedChunks: { groups: VENDOR_CHUNKS },
      },
    },
  },
})
