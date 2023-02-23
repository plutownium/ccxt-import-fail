import inject from "@rollup/plugin-inject"

import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
})
