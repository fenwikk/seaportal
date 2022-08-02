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

<div class="header-container">
	<div class="container">
		<div class="header">
			<div>
				<img src={Portal} class="logo" alt="Seaportal Logo" />

				<div class="divider"><div /></div>

				<div class="client-name">
					Client Name Ltd.
				</div>
			</div>
			
			<div>
				<OutlinedButton>Feedback</OutlinedButton>
				<LinkButton>Changelog</LinkButton>

				<img src={Avatar} class="avatar" alt="Avatar" />
			</div>
		</div>

		<Navigation elements={navigationElements} selectedIndex={startingElementIndex} />
	</div>
</div>
