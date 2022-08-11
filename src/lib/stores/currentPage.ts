import type { Page, SeaPortalOptions } from '$lib/seaportal';
import { get, writable } from 'svelte/store';
import options from './options';

const currentPage = writable<Page>(get(options).pages[0]);

export default currentPage;
