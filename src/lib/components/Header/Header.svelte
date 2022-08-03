<script lang="ts">
	import '../../main.css';
	import Portal from '../../assets/portal.png';
	import Avatar from '../../assets/Avatar.jpg';
	import { Navigation, type NavigationElement } from '.';
	import { OutlinedButton } from '../Buttons';
	import LinkButton from '../Buttons/LinkButton.svelte';
</script>

<div class="header-container">
	<div class="container">
		<div class="header">
			<div>
				<img src={Portal} class="logo" alt="Seaportal Logo" />

				<div class="divider"><div /></div>

				<div class="client-name">Client Name Ltd.</div>
			</div>

			<div>
				<OutlinedButton>Feedback</OutlinedButton>
				<LinkButton>Changelog</LinkButton>

				<img src={Avatar} class="avatar" alt="Avatar" />
			</div>
		</div>

		<Navigation />
	</div>
</div>
