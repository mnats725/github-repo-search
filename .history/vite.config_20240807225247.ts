import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": resolve(__dirname, "src/features"),
      "@components": resolve(__dirname, "src/components"),
      "@api": resolve(__dirname, "src/api"),
      "@store": resolve(__dirname, "src/store"),
      "@utils": resolve(__dirname, "src/utils"),
      "@types": resolve(__dirname, "src/"),
    },
  },
});
