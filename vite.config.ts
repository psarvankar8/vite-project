import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Import SVGR
import path from 'path-browserify'; // Include path-browserify

// Use Vite's built-in file resolution for input files
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr(),
    ],
    build: {
      outDir: 'dist',
      sourcemap: true,  // Enables source maps for easier debugging
      rollupOptions: {
        input: {
          main: 'index.html', // The main entry point for the application
        },
      },
    },
    base: './',
    server: {
      open: true, // Automatically opens the app in the browser when the dev server starts
    },
    resolve: {
      alias: {
        path: 'path-browserify',  // Alias for path-browserify module
      },
    },
    define: {
      // Define process.env variables here
      'process.env': {
        CUSTOM_ENV: JSON.stringify(process.env.CUSTOM_ENV) // Custom environment variable if set
      }
    },
   
  };
});
