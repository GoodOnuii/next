import { fileURLToPath, URL } from 'url'

import graphql from '@rollup/plugin-graphql'
import react from '@vitejs/plugin-react-swc'
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
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: './__tests__/setup.ts',
  },
})
