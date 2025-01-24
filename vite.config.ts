import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import ViteRestart from 'vite-plugin-restart'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  plugins: [react(), ViteRestart({
    restart: ["tsconfig.json", "tsconfig.node.json"],
  })],
});
