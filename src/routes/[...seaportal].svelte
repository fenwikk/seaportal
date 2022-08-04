<script lang="ts" context="module">
	import Puppeteer from "puppeteer"
	import Portal from '$lib/Portal.svelte';
	import type { Load } from '@sveltejs/kit';
import screenshot from "$lib/pages/stores/screenshot";

	export const load: Load = async ({ params }) => {
		if (!params.seaportal.startsWith('portal')) {
			return {
				status: 404
			};
		}

		const browser = await Puppeteer.launch()
		const page = await browser.newPage()

		await page.goto("https://www.google.com")
		const render = await page.screenshot({ encoding: "base64" })

		if (typeof render != "string")
			throw new Error("")

		screenshot.set(render)

		await browser.close()

		return {};
	};
</script>

<Portal baseUrl={'/portal'} />
