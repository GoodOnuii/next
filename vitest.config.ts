import { fileURLToPath, URL } from 'url'

import react from '@vitejs/plugin-react-swc'
import graphql from '@rollup/plugin-graphql'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
    graphql({
      exclude: ['**/*.gql'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  test: {
    include: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './__tests__/setup.ts',
  },
})
