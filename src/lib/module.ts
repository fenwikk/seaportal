import { page } from '$app/stores';
import type { Load } from '@sveltejs/kit';
import { get } from 'svelte/store';
import currentPage from './stores/currentPage';
import options from './stores/options';

export const LoadFunc: Load = ({ params }) => {
	const pages = get(options).pages;
	let pageFound = false;

	pages.map((value) => {
		if ((value.slug.startsWith('/') ? value.slug.substring(1) : value.slug) == params.seaportal) {
			pageFound = true;
			currentPage.set(value);
		}
	});

	if (params.seaportal.startsWith('portal')) pageFound = true;

	if (pageFound) {
		return {};
	} else {
		return {
			status: 404
		};
	}
};
