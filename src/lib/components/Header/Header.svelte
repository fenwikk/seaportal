<script lang="ts">
	import '../../main.css';
	import Portal from '../../assets/portal.png';
	import Avatar from '../../assets/Avatar.jpg';
	import { Navigation, type NavigationElement } from '.';
	import { OutlinedButton } from "../Buttons"
	import { browser } from '$app/env';
import LinkButton from '../Buttons/LinkButton.svelte';

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
		<div class="py-4 flex items-center justify-between">
			<div class="flex items-center">
				<img src={Portal} class="w-12 h-12 mt-1" alt="Portal Logo" />

				<div class="mx-5">
                    <div class="w-[2px] h-8 rotate-12 rounded-full bg-gray-300" />
                </div>

				<div class="text-xl">
					Client Name Ltd.
				</div>
			</div>
			
			<div class="flex items-center">
				<OutlinedButton class="mr-2">Feedback</OutlinedButton>
				<LinkButton class="mr-4">Changelog</LinkButton>

				<img src={Avatar} class="w-8 h-8 rounded-full" alt="Avatar" />
			</div>
		</div>

		<Navigation elements={navigationElements} selectedIndex={startingElementIndex} />
	</div>
</div>
