import type { Load } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

type SeaPortalOptions = {
	baseUrl: string;
	themes: Themes
};

type Page = {
	slug: string;
	component: typeof SvelteComponent;
	load?: Load;
};

type Themes = {
	[id: string]: Theme
}

type Theme = {
	id: string
	pages: Page[]
}