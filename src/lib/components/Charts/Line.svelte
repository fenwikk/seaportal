<script lang="ts">
	import { LayerCake, calcExtents, Svg } from 'layercake';
	import { timeDay } from 'd3-time';
	import { scaleBand, scaleTime } from 'd3-scale';

	import Scatter from './parts/Scatter.svelte';
	import AxisX from './parts/AxisX.svelte';
	import AxisY from './parts/AxisY.svelte';

	const xKey = 'seconds';
	const yKey = 'value';

	const r = 4;
	const padding = 2;

	const daysTransformed = [...Array(24).keys()].map((d) => {
		const timestring = new Date()
		timestring.setHours(d)

		return {
			timestring: timestring.toString(),
			seconds: timestring.getHours() * 60 * 60 + timestring.getMinutes() * 60 + timestring.getSeconds(),
			value: d
		};
	});

	/* --------------------------------------------
	 * Generate a range of days in between the min and max
	 * in case we are missing any in our data so we can show empty days for them
	 */
	const extents = calcExtents(daysTransformed, {
		x: (d: any) => d.timestring
	});

	if (extents.x == undefined || extents.x[0] == undefined || extents.x[1] == undefined) throw new Error('Sum ting wong');

	// Convert to string even though it is one to make Typescript happy
	const minDate = extents.x[0]
		.toString()
		.split('T')[0]
		.split('-')
		.map((d) => +d);
	const maxDate = extents.x[1]
		.toString()
		.split('T')[0]
		.split('-')
		.map((d) => +d);

	const allDays = timeDay
		.range(
			new Date(Date.UTC(minDate[0], minDate[1] - 1, minDate[2])),
			new Date(Date.UTC(maxDate[0], maxDate[1] - 1, maxDate[2] + 1))
		)
		.map((d: any) => d.toISOString().split('T')[0])
		.sort();
</script>

<div class="h-full w-full">
	<LayerCake
		x={xKey}
		y={yKey}
		xDomain={[0, 24 * 60 * 60]}
		xScale={scaleTime()}
		data={daysTransformed}
	>
		<Svg>
			<AxisX
				ticks={[0, 4, 8, 12, 16, 20, 24].map((d) => d * 60 * 60)}
				formatTick={(d) => `${Math.floor(d / 60 / 60)}:00`}
			/>
			<AxisY />
			<Scatter {r} fill={'rgba(255, 204, 0, 0.75)'} />
		</Svg>
	</LayerCake>
</div>
