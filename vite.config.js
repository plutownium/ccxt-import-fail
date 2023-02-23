import path from 'path'
import inject from '@rollup/plugin-inject'

import { sveltekit } from '@sveltejs/kit/vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	},
	build: {
		rollupOptions: {
			plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			define: {
				global: 'globalThis'
			},
			plugins: [
				NodeGlobalsPolyfillPlugin({ buffer: true })
			]
		}
	}
})
