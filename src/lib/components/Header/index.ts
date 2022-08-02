import Header from './Header.svelte';
import Navigation from './Navigation.svelte';

type NavigationElement = { label: string; url: string; element?: HTMLElement };

export default Header;
export { Navigation, type NavigationElement };
