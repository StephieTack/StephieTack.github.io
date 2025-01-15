import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  build: {
    outDir: "dist", // Der Ordner, in dem die gebauten Dateien landen
  },
});
