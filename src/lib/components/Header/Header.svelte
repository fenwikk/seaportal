<script lang="ts">
	import '../../main.css';
	import Portal from '../../assets/portal.png';
	import { Navigation, type NavigationElement } from '.';
	import { browser } from '$app/env';

	export let baseUrl;

	const navigationElements: NavigationElement[] = [
		{
			label: 'Home',
			url: baseUrl
		},
		{
			label: 'Settings',
			url: baseUrl + '/settings'
		}
	];

	let startingElementIndex: number = 0;
	if (browser)
		startingElementIndex = navigationElements.findIndex(
			(value) => value.url == location?.pathname || ''
		);
</script>

<div class="border-b">
	<div class="container">
		<div class="py-4 flex items-center">
			<div class="flex items-center">
				<img src={Portal} class="w-12 h-12" alt="" />
			</div>
		</div>

		<Navigation elements={navigationElements} selectedIndex={startingElementIndex} />
	</div>
</div>
