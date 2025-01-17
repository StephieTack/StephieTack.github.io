import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/StephieTack.github.io/", // Your GitHub Pages repository name
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  esbuild: {
    loader: "jsx", // Ensures JSX is properly compiled
    include: /src\/.*\.[jt]sx?$/, // Include JSX and TSX files in processing
  },
});
