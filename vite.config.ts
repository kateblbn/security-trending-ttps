import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Make sure this matches your GitHub repository name
  build: {
    outDir: 'build',
  },
});
