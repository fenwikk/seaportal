<script lang="ts">
	import { goto } from '$app/navigation';
	import type { NavigationElement } from '.';

	export let elements: NavigationElement[];

	export let selectedIndex: number = 0;

	let hoveredIndex: number = -1;
	let first = true;
</script>

<ul
	class="flex relative pb-2"
	on:mouseleave={() => {
		first = true;
		hoveredIndex = -1;
	}}
	on:mouseenter={() => (first = true)}
>
	<div
		class="absolute bg-gray-200 rounded -z-10 {hoveredIndex == -1 ? 'hidden' : 'block'}"
		style="left: {(elements[hoveredIndex]?.element?.offsetLeft || 0) - 12}px;
			width: {elements[hoveredIndex]?.element?.clientWidth
			? (elements[hoveredIndex]?.element?.clientWidth || 0) + 24
			: 0}px;
			height: {elements[hoveredIndex]?.element?.clientHeight || 0}px;
			transition-duration: {first ? '0' : '200'}ms;"
	/>
	<div
		class="absolute bg-black h-[3px] bottom-0 duration-200"
		style="left: {elements[selectedIndex]?.element?.offsetLeft || 0}px;
			width: {elements[selectedIndex]?.element?.clientWidth || 0}px;"
	/>

	{#each elements as element, i}
		<li class="mx-3">
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
					selectedIndex = i;
				}}
				class="py-1 cursor-pointer"
			>
				{element.label}
			</div>
		</li>
	{/each}
</ul>
