import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { splitVendorChunkPlugin } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('react-redux') || id.includes('redux-persist')) {
            return 'redux';
          } else if (id.includes('react') || id.includes('react-dom')) {
            return 'react';
          } else if (id.includes('react-router-dom')) {
            return 'react-router';
          } else if (id.includes('formik') || id.includes('zod') || id.includes('zod-formik-adapter') || id.includes('react-datepicker') || id.includes('react-hook-form') || id.includes('html-react-parser')) {
            return 'form-validation';
          } else {
            return 'vendor';
          }
        },
      },
    },
  },
})
