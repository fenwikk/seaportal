<script lang="ts">
	import { goto } from '$app/navigation';
	import type { NavigationElement } from '.';

	export let elements: NavigationElement[];

	export let selectedIndex: number = 0;

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
		style="left: {elements[selectedIndex]?.element?.offsetLeft || 0}px;
			width: {elements[selectedIndex]?.element?.clientWidth || 0}px;"
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
					selectedIndex = i;
				}}
			>
				{element.label}
			</div>
		</li>
	{/each}
</ul>
