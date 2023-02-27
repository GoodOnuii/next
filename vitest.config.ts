import { fileURLToPath, URL } from 'url';

import graphql from '@rollup/plugin-graphql';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

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
    setupFiles: '/setupTest.ts',
    coverage: {
      // provider = c8 by default
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './__tests__/unit/coverage',
    },
  },
});
