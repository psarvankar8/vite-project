import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Import SVGR

// Use Vite's built-in file resolution for input files
export default defineConfig(({ mode }) => {
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
          // You don't need __dirname, just provide relative paths
          main: 'index.html', // The main entry point for the application
        },
      },
    },
    server: {
      open: true, // Automatically opens the app in the browser when the dev server starts
    },
    resolve: {
      alias: {
        // Only include this if you specifically need path-browserify in the browser
        path: 'path-browserify',  
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode), // Define mode for environment (optional)
    },
    base: './',
  };
});
