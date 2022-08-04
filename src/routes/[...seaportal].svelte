<script lang="ts" context="module">
	import Portal from '$lib/Portal.svelte';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ params }) => {
		if (!params.seaportal.startsWith('portal')) {
			return {
				status: 404
			};
		}

		return {};
	};
</script>

<Portal baseUrl={'/portal'} />
