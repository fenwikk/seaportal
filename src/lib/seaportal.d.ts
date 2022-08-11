import type { Load } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

type SeaPortalOptions = {
	baseUrl: string;
	pages: Page[];
	plugins?: Plugin[];
};

type Page = {
	slug: string;
	component: typeof SvelteComponent;
	load?: Load;
};

type Plugin = () => Partial<PluginOutput>;

type PluginOutput = {
	pages: Page[];
	plugins: Plugins[];
};
