import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  // Load the environment variables based on the mode (e.g., development, production)
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      svgr(),
    ],
    define: {
      // Expose the environment variables to your application
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
    server: {
      open: true,  // Opens the app in the browser automatically
    },
    resolve: {
      alias: {
        path: 'path-browserify',  // Example alias for browser path
      },
    },
    base: './',  // Ensures correct paths in production
  };
});
