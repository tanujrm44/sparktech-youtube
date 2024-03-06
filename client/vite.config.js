import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": "https://sparktech-ecommerce-youtube.onrender.com",
      "/upload": "https://sparktech-ecommerce-youtube.onrender.com",
    },
  },
})
