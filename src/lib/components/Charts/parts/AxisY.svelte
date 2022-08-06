<!--
  @component
  Generates an HTML y-axis.
 -->
<script lang="ts">
	import { getContext } from 'svelte';

	const { padding, xRange, yScale } = getContext('LayerCake');

	export let gridlines: boolean = true;

	export let tickMarks: boolean = false;

	export let baseline: boolean = false;

	export let formatTick: (d: any) => any = (d) => d;

	export let ticks: number | Array<any> | Function = 4;

	export let xTick: number = -4;

	export let yTick: number = -1;

	$: isBandwidth = typeof $yScale.bandwidth === 'function';

	$: tickVals = Array.isArray(ticks)
		? ticks
		: isBandwidth
		? $yScale.domain()
		: typeof ticks === 'function'
		? ticks($yScale.ticks())
		: $yScale.ticks(ticks);
</script>

<div class="axis y-axis" style="transform:translate(-{$padding.left}px, 0)">
	{#each tickVals as tick, i (tick)}
		<div
			class="tick tick-{i}"
			style="top:{$yScale(tick) + (isBandwidth ? $yScale.bandwidth() / 2 : 0)}%;left:{$xRange[0]}%;"
		>
			{#if gridlines !== false}
				<div
					class="gridline"
					style="top:0;left:{isBandwidth ? $padding.left : 0}px;right:-{$padding.left +
						$padding.right}px;"
				/>
			{/if}
			{#if baseline !== false && i === 0}
				<div
					class="gridline baseline"
					style="top:0;left:{isBandwidth ? $padding.left : 0};right:-{$padding.left +
						$padding.right}px;"
				/>
			{/if}
			{#if tickMarks === true}
				<div
					class="tick-mark"
					style="top:0;left:{isBandwidth ? $padding.left - 6 : 0}px;width:6px;"
				/>
			{/if}
			<div
				class="text"
				style="
            top:{yTick}px;
            left:{isBandwidth ? $padding.left + xTick - 4 : 0}px;
            transform: translate({isBandwidth ? '-100%' : 0}, {isBandwidth
					? -50 - Math.floor($yScale.bandwidth() / -2)
					: '-100'}%);
          "
			>
				{formatTick(tick)}
			</div>
		</div>
	{/each}
</div>

<style>
	.axis,
	.tick,
	.tick-mark,
	.gridline,
	.baseline,
	.text {
		position: absolute;
	}
	.axis {
		width: 100%;
		height: 100%;
	}
	.tick {
		font-size: 12px;
		width: 100%;
		font-weight: 100;
	}

	.gridline {
		border-top: 1px dashed #aaa;
	}
	.tick-mark {
		border-top: 1px solid #aaa;
	}

	.baseline.gridline {
		border-top-style: solid;
	}

	.tick .text {
		color: #666;
	}
</style>
