import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: '.',
  base: './',
  plugins: [
    viteSingleFile()
  ],
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsInlineLimit: 100000000, // inline all assets for 100% portable offline single file
    chunkSizeWarningLimit: 2000,
  },
  server: {
    port: 3000,
    open: false,
  }
});
