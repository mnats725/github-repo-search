import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": resolve(__dirname, "src/features"),
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
