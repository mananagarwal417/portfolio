import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      screens: {
        'lg-custom': '900px', // custom breakpoint at 900px
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
