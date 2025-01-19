import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ mode }) => {
//   return {
//     plugins: [react()],
//     base: mode === "production" ? "/StephieTack.github.io/" : "/", // Unterschiedliche Basis-URLs
//     build: {
//       outDir: "dist",
//     },
//     esbuild: {
//       loader: "jsx",
//       include: /src\/.*\.[jt]sx?$/, // Erlaubt JSX in .js und .jsx
//     },
//   };
// });
