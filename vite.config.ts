import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
  resolve: {
    dedupe: ['@vitejs/plugin-react', 'vite-plugin-svgr', 'vite-tsconfig-paths']
  },
  build: {
    outDir: 'build',
    minify: 'terser',
    cssCodeSplit: true,
    modulePreload: true,
    terserOptions: {
      compress: {
        dead_code: true,
        global_defs: {
          DEBUG: false
        }
      },
      module: true,
      safari10: false,
      toplevel: true
    }
  },
  server: {
    host: true,
    open: true,
    port: 3000,
    strictPort: true
  }
})
