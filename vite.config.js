import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	alias: {
		"@": fileURLToPath(new URL("./src", import.meta.url)),
		'./runtimeConfig': './runtimeConfig.browser',
	},
};

export default config;
