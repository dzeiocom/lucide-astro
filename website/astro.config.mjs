import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"


// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	compressHTML: true,
	build: {
		assets: 'assets',
		inlineStylesheets: 'auto'
	},
	server: {
		host: true
	},
	trailingSlash: 'never',
	vite: {
		server: {
			watch: {
				// support WSL strange things
				usePolling: !!process.env.WSL_DISTRO_NAME
			}
		}
	},

	// Customizable depending on goal
	output: 'static',
	site: 'https://lucide-astro.dzeio.com',
	experimental: {
		assets: true
	}
 })
