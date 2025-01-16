import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/StephieTack.github.io/", // your repository name
  build: {
    outDir: "dist", // The folder where the built files are placed
  },
});
