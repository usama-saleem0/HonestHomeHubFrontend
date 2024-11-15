// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Example of creating separate chunks for vendor libraries
          vendor: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled'],
          // You can add more chunks based on your project's needs
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Increase the chunk size warning limit as needed
  },
});
