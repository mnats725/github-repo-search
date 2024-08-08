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
      "@lib": resolve(__dirname, "src/lib"),
      "@types": resolve(__dirname, "src/types/"),
      "@styles": resolve(__dirname, "src/styles"),
      "@__mocks__": resolve(__dirname, "src/__mocks__"),
    },
  },
});
