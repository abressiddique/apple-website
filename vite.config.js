import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9", // Replace with your actual Sentry organization slug
      project: "javascript-react", // Replace with your actual Sentry project name
      include: "./dist", // Directory to scan for sourcemaps
      authToken: process.env.SENTRY_AUTH_TOKEN, // Use environment variables for sensitive data
      setCommits: {
        auto: true // Automatically associate commits with releases
      }
    })
  ],
  base: "/apple-website/",
  build: {
    sourcemap: true
  }
});
