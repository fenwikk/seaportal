<script lang="ts">
	import { goto } from '$app/navigation';
	import type { NavigationElement } from '.';

	export let elements: NavigationElement[];

	export let selectedIndex: number = 0;

	let hoveredElement: NavigationElement | undefined;
	let first = true;
</script>

<ul
	class="flex relative mt-2"
	on:mouseleave={() => {
		first = true;
		hoveredElement = undefined;
	}}
	on:mouseenter={() => (first = true)}
>
	<div
		class="absolute bg-gray-200 rounded -z-10"
		style="left: {(hoveredElement?.element?.offsetLeft || 0) - 12}px; width: {hoveredElement
			?.element?.clientWidth
			? (hoveredElement.element.clientWidth || 0) + 24
			: 0}px; height: {(hoveredElement?.element?.clientHeight || 0) -
			4}px; transition-duration: {first ? '0' : '200'}ms;"
	/>

	{#each elements as element, i}
		<li class="mx-3">
			<div
				bind:this={elements[i].element}
				on:mouseenter={() => {
					hoveredElement = elements[i];
				}}
				on:mouseleave={() => {
					if (first) first = false;
				}}
				on:click={() => goto(element.url)}
				class="pt-2 pb-3 cursor-pointer border-b-2 {i == selectedIndex
					? 'border-black'
					: 'border-transparent'}"
			>
				{element.label}
			</div>
		</li>
	{/each}
</ul>
