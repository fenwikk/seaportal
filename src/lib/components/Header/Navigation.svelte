<script lang="ts">
	import { browser } from '$app/env';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import currentIndex from './stores/currentIndex';
	import navigationElements from './stores/navigationElements';

	const elements = $navigationElements;

	currentIndex.set(
		$navigationElements.findIndex(
			(value) =>
				(value.url.startsWith('/') ? value.url.substring(1) : value.url) == $page.params.seaportal
		)
	);

	let hoveredIndex: number = -1;
	let firstHover = true;
	let hasDoneFirstSelect = false;
</script>

<ul
	class="navigation"
	on:mouseleave={() => {
		firstHover = true;
		hoveredIndex = -1;
	}}
	on:mouseenter={() => (firstHover = true)}
>
	<div
		class="hover-element"
		style="left: {(elements[hoveredIndex]?.element?.offsetLeft || 0) - 9}px;
			width: {elements[hoveredIndex]?.element?.clientWidth
			? (elements[hoveredIndex]?.element?.clientWidth || 0) + 18
			: 0}px;
			height: {elements[hoveredIndex]?.element?.clientHeight || 0}px;
			transition-duration: {firstHover ? '0' : '200'}ms;"
	/>
	<div
		class="select-element"
		style="left: {elements[$currentIndex]?.element?.offsetLeft || 0}px;
			width: {elements[$currentIndex]?.element?.clientWidth || 0}px;
			transition-duration: {hasDoneFirstSelect ? '200' : '0'}ms;"
	/>

	{#each elements as element, i}
		<li>
			<div
				bind:this={elements[i].element}
				on:mouseenter={() => {
					hoveredIndex = i;
				}}
				on:mouseleave={() => {
					if (firstHover) firstHover = false;
				}}
				on:click={() => {
					goto(element.url);
					hasDoneFirstSelect = true;
					currentIndex.set(i);
				}}
			>
				{element.label}
			</div>
		</li>
	{/each}
</ul>
