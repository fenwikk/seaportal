<!--
  @component
  Generates an HTML x-axis, useful for server-side rendered charts.  This component is also configured to detect if your x-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
<script lang="ts">
	import { getContext } from 'svelte';

	const { xScale } = getContext('LayerCake');

	export let gridlines: boolean = true;

	export let tickMarks: boolean = false;

	export let baseline: boolean = false;

	export let snapTicks: boolean = false;

	export let formatTick: (d: any) => any = (d) => d;

	export let ticks: number | Array<any> | Function;

	export let yTick: number = 7;

	$: isBandwidth = typeof $xScale.bandwidth === 'function';

	$: tickVals = Array.isArray(ticks)
		? ticks
		: isBandwidth
		? $xScale.domain()
		: typeof ticks === 'function'
		? ticks($xScale.ticks())
		: $xScale.ticks(ticks);
</script>

<div class="axis x-axis" class:snapTicks>
	{#each tickVals as tick, i (tick)}
		{#if gridlines !== false}
			<div class="gridline" style="left:{$xScale(tick)}%;top: 0px;bottom: 0;" />
		{/if}
		{#if tickMarks === true}
			<div
				class="tick-mark"
				style="left:{$xScale(tick) +
					(isBandwidth ? $xScale.bandwidth() / 2 : 0)}%;height:6px;bottom: -6px;"
			/>
		{/if}
		<div
			class="tick tick-{i}"
			style="left:{$xScale(tick) + (isBandwidth ? $xScale.bandwidth() / 2 : 0)}%;top:100%;"
		>
			<div class="text" style="top:{yTick}px;">{formatTick(tick)}</div>
		</div>
	{/each}
	{#if baseline === true}
		<div class="baseline" style="top: 100%;width: 100%;" />
	{/if}
</div>

<style>
	.axis,
	.tick,
	.tick-mark,
	.gridline,
	.baseline {
		position: absolute;
	}
	.axis {
		width: 100%;
		height: 100%;
	}
	.tick {
		font-size: 0.725em;
		font-weight: 200;
	}

	.gridline {
		border-left: 1px dashed #aaa;
	}

	.tick-mark {
		border-left: 1px solid #aaa;
	}
	.baseline {
		border-top: 1px solid #aaa;
	}

	.tick .text {
		color: #666;
		position: relative;
		white-space: nowrap;
		transform: translateX(-50%);
	}
	/* This looks a little better at 40 percent than 50 */
	.axis.snapTicks .tick:last-child {
		transform: translateX(-40%);
	}
	.axis.snapTicks .tick.tick-0 {
		transform: translateX(40%);
	}
</style>
