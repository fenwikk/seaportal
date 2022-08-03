import type { SvelteComponent } from 'svelte';
import Header from './Header.svelte';
import Navigation from './Navigation.svelte';

type NavigationElement = {
	label: string;
	url: string;
	element?: HTMLElement;
	page: typeof SvelteComponent;
};

export default Header;
export { Navigation, type NavigationElement };
