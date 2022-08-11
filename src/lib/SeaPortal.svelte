<script lang="ts">
	import { page } from '$app/stores';
	import Portal from './Portal.svelte';

	import type { SeaPortalOptions } from './seaportal';
	import Site from './Site.svelte';
import options from './stores/options';
</script>

{#if $page.params.seaportal.startsWith('portal')}
	<Portal baseUrl={$options.baseUrl} />
{:else}
	<Site />
{/if}
