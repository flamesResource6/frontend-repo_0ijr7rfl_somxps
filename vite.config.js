import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configure Vite to use the app inside the "frontend" directory
export default defineConfig({
  root: 'frontend',
  plugins: [react()],
  optimizeDeps: {
    // Ensure Vite scans the correct source directory
    entries: ['frontend/src/**/*.{js,jsx,ts,tsx}'],
    // Exclude packages that can be problematic for the optimizer
    exclude: ['@splinetool/react-spline', 'framer-motion'],
    holdUntilCrawlEnd: true
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    hmr: false,
    watch: false,
    cors: {
      origin: '*',
      credentials: true
    },
    allowedHosts: [
      '.modal.host',
      'localhost',
      '127.0.0.1'
    ]
  }
})