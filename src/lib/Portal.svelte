<script lang="ts">
	import Header from './components/Header';
	import Home from './pages/Home.svelte';
	import Settings from './pages/Settings.svelte';
	import navigationElements from './components/Header/stores/navigationElements';
	import currentIndex from './components/Header/stores/currentIndex';
import Pages from './pages/Pages.svelte';

	export let baseUrl: string;

	navigationElements.set([
		{
			label: 'Home',
			url: baseUrl,
			page: Home
		},
		{
			label: 'Settings',
			url: baseUrl + '/settings',
			page: Settings
		},
		{
			label: 'Pages',
			url: baseUrl + '/pages',
			page: Pages
		}
	]);
</script>

<Header />

<svelte:component this={$navigationElements[$currentIndex].page} />
