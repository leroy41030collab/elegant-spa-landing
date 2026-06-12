import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Pure SPA build: outputs static files into ./dist
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use "./" so the build works on any host (Vercel, GitHub Pages subpaths, etc.)
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
