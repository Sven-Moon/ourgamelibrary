import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import ViteRestart from 'vite-plugin-restart'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'


// vitest automatically sets NODE_ENV to 'test' when running tests
const isTest = process.env.NODE_ENV === 'test'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
      ":app": resolve(__dirname, "src/app"),
      ":cmp": resolve(__dirname, "src/components"),
      ":forms": resolve(__dirname, "src/components/Forms"),
      ":pages": resolve(__dirname, "src/pages"),
    },
  },
  plugins: [
    react(), ViteRestart({
      restart: ["tsconfig.json", "tsconfig.node.json"],
    }),
    !isTest && TanStackRouterVite({ autoCodeSplitting: true })
  ],
});
