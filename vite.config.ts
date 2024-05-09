import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(path.join(__dirname, '/src/'))
      },
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, '/src/components/'))
      },
      {
        find: '@layouts',
        replacement: path.resolve(path.join(__dirname, '/src/layouts/'))
      },
      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, '/src/pages/'))
      },
    ]
  }
})
