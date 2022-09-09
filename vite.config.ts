import { defineConfig } from 'vite';
import { ViteAngularPlugin } from '@nxext/angular-vite';

export default defineConfig({
  esbuild: false,
  plugins: [ViteAngularPlugin()],
  resolve: {
    // preserveSymlinks: true,
  },
  // esbuild: {
  //   sourcemap: false,
  //   legalComments: 'none',
  // },
  build: {
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            '@angular/core',
            '@angular/common',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            'zone.js/dist/zone',
          ],
        },
      },
    },
  },
});
