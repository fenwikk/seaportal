import type { Plugin } from '$lib/seaportal';
import HomePageSvelte from './HomePage.svelte';
import SubPageSvelte from './SubPage.svelte';

export const TestPlugin: Plugin = () => {
	return {
		pages: [
			{
				slug: '/',
				component: HomePageSvelte
			},
			{
				slug: '/sub',
				component: SubPageSvelte
			}
		]
	};
};
