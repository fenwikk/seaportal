<script lang="ts" context="module">
	export const load: Load = ({ params }) => {
		if (!params.seaportal.startsWith('portal')) {
			return {
				status: 404
			};
		}

		return {};
	};
</script>

<script lang="ts">
	import { browser } from '$app/env';

	import { goto } from '$app/navigation';
	import type { Load } from '@sveltejs/kit';
	import currentIndex from './stores/currentIndex';
	import navigationElements from './stores/navigationElements';

	const elements = $navigationElements;

	if (browser)
		currentIndex.set(
			$navigationElements.findIndex((value) => value.url == location?.pathname || '')
		);

	let hoveredIndex: number = -1;
	let first = true;
</script>

<ul
	class="navigation"
	on:mouseleave={() => {
		first = true;
		hoveredIndex = -1;
	}}
	on:mouseenter={() => (first = true)}
>
	<div
		class="hover-element"
		style="left: {(elements[hoveredIndex]?.element?.offsetLeft || 0) - 12}px;
			width: {elements[hoveredIndex]?.element?.clientWidth
			? (elements[hoveredIndex]?.element?.clientWidth || 0) + 24
			: 0}px;
			height: {elements[hoveredIndex]?.element?.clientHeight || 0}px;
			transition-duration: {first ? '0' : '200'}ms;"
	/>
	<div
		class="select-element"
		style="left: {elements[$currentIndex]?.element?.offsetLeft || 0}px;
			width: {elements[$currentIndex]?.element?.clientWidth || 0}px;"
	/>

	{#each elements as element, i}
		<li>
			<div
				bind:this={elements[i].element}
				on:mouseenter={() => {
					hoveredIndex = i;
				}}
				on:mouseleave={() => {
					if (first) first = false;
				}}
				on:click={() => {
					goto(element.url);
					currentIndex.set(i);
				}}
			>
				{element.label}
			</div>
		</li>
	{/each}
</ul>
