// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({

//   plugins: [react(), tailwindcss(),],
//   base: "/reactpost/",
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/reactpost/",

  build: {
    // Increase the chunk size warning limit to 1000 KB
    chunkSizeWarningLimit: 1000, // Set to 1000 KB (1MB), you can adjust as needed

    rollupOptions: {
      output: {
        // Manual chunking for better optimization
        manualChunks(id) {
          // If the chunk is from node_modules (third-party libraries), put them in a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor'; // All node_modules dependencies will be in a 'vendor' chunk
          }
        },
      },
    },
  },
});
