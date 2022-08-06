<script lang="ts">
	import { LayerCake, calcExtents, Html } from 'layercake';
	import { timeDay } from 'd3-time';
	import { scaleBand, scaleTime } from 'd3-scale';

	import Scatter from './parts/Scatter.svelte';
	import AxisX from './parts/AxisX.svelte';
	import AxisY from './parts/AxisY.svelte';

	// This example loads csv data as json using @rollup/plugin-dsv
	const data = [
		{ timestring: '2018-07-22T22:25:55Z' },
		{ timestring: '2018-07-22T19:35:29Z' },
		{ timestring: '2018-07-22T18:54:42Z' },
		{ timestring: '2018-07-22T02:05:59Z' },
		{ timestring: '2018-07-22T00:55:02Z' },
		{ timestring: '2018-07-22T00:53:00Z' },
		{ timestring: '2018-07-22T23:32:37Z' },
		{ timestring: '2018-07-22T17:52:55Z' },
		{ timestring: '2018-07-22T17:52:01Z' },
		{ timestring: '2018-07-22T17:32:21Z' },
		{ timestring: '2018-07-22T16:38:22Z' },
		{ timestring: '2018-07-22T16:38:20Z' },
		{ timestring: '2018-07-22T21:07:28Z' },
		{ timestring: '2018-07-22T01:36:47Z' },
		{ timestring: '2018-07-22T01:00:04Z' },
		{ timestring: '2018-07-22T20:15:35Z' },
		{ timestring: '2018-07-23T03:05:05Z' },
		{ timestring: '2018-07-23T02:56:18Z' },
		{ timestring: '2018-07-23T02:11:53Z' },
		{ timestring: '2018-07-23T02:08:49Z' },
		{ timestring: '2018-07-23T02:02:14Z' },
		{ timestring: '2018-07-23T04:13:29Z' },
		{ timestring: '2018-07-23T03:24:58Z' },
		{ timestring: '2018-07-23T03:23:55Z' },
		{ timestring: '2018-07-23T03:22:02Z' },
		{ timestring: '2018-07-23T18:37:05Z' },
		{ timestring: '2018-07-23T01:34:48Z' },
		{ timestring: '2018-07-23T01:11:38Z' },
		{ timestring: '2018-07-23T01:02:25Z' },
		{ timestring: '2018-07-23T23:32:07Z' },
		{ timestring: '2018-07-23T18:26:04Z' },
		{ timestring: '2018-07-24T18:25:35Z' },
		{ timestring: '2018-07-24T02:56:28Z' },
		{ timestring: '2018-07-24T16:33:57Z' },
		{ timestring: '2018-07-24T15:52:16Z' },
		{ timestring: '2018-07-24T20:31:12Z' },
		{ timestring: '2018-07-24T20:27:11Z' },
		{ timestring: '2018-07-24T14:17:18Z' },
		{ timestring: '2018-07-24T03:49:28Z' },
		{ timestring: '2018-07-24T03:42:33Z' },
		{ timestring: '2018-07-24T03:20:45Z' },
		{ timestring: '2018-07-24T01:47:25Z' },
		{ timestring: '2018-07-24T01:26:16Z' },
		{ timestring: '2018-07-24T01:16:55Z' },
		{ timestring: '2018-07-25T00:50:15Z' },
		{ timestring: '2018-07-25T19:16:21Z' },
		{ timestring: '2018-07-25T02:38:15Z' },
		{ timestring: '2018-07-25T01:03:55Z' },
		{ timestring: '2018-07-25T01:00:55Z' },
		{ timestring: '2018-07-25T00:59:31Z' },
		{ timestring: '2018-07-25T19:06:36Z' },
		{ timestring: '2018-07-25T19:03:18Z' },
		{ timestring: '2018-07-25T01:05:50Z' },
		{ timestring: '2018-07-25T23:43:32Z' },
		{ timestring: '2018-07-25T17:39:53Z' },
		{ timestring: '2018-07-25T17:37:15Z' },
		{ timestring: '2018-07-25T15:50:12Z' },
		{ timestring: '2018-07-25T03:47:16Z' },
		{ timestring: '2018-07-25T03:06:21Z' },
		{ timestring: '2018-07-25T02:59:34Z' },
		{ timestring: '2018-07-25T20:53:53Z' },
		{ timestring: '2018-07-25T01:37:58Z' },
		{ timestring: '2018-07-25T01:32:23Z' },
		{ timestring: '2018-07-25T01:30:09Z' },
		{ timestring: '2018-07-25T17:03:39Z' },
		{ timestring: '2018-07-25T16:00:39Z' },
		{ timestring: '2018-07-25T15:59:44Z' },
		{ timestring: '2018-07-25T22:29:55Z' },
		{ timestring: '2018-07-25T02:59:41Z' },
		{ timestring: '2018-07-25T02:58:36Z' },
		{ timestring: '2018-07-25T02:56:41Z' },
		{ timestring: '2018-07-25T02:21:56Z' },
		{ timestring: '2018-07-25T02:20:27Z' },
		{ timestring: '2018-07-25T02:15:25Z' },
		{ timestring: '2018-07-25T02:22:38Z' },
		{ timestring: '2018-07-25T02:19:25Z' },
		{ timestring: '2018-07-25T22:48:50Z' },
		{ timestring: '2018-07-25T06:52:20Z' },
		{ timestring: '2018-07-25T06:45:09Z' },
		{ timestring: '2018-07-25T21:18:11Z' },
		{ timestring: '2018-07-25T17:35:37Z' },
		{ timestring: '2018-07-25T01:52:56Z' },
		{ timestring: '2018-07-25T01:07:36Z' },
		{ timestring: '2018-07-25T01:05:37Z' },
		{ timestring: '2018-07-25T01:05:27Z' },
		{ timestring: '2018-07-25T17:24:44Z' },
		{ timestring: '2018-07-25T15:53:26Z' },
		{ timestring: '2018-07-25T15:32:59Z' },
		{ timestring: '2018-07-25T17:33:38Z' },
		{ timestring: '2018-07-25T15:28:30Z' },
		{ timestring: '2018-07-25T15:16:40Z' },
		{ timestring: '2018-07-28T15:07:48Z' },
		{ timestring: '2018-07-28T13:56:38Z' },
		{ timestring: '2018-07-28T04:46:00Z' },
		{ timestring: '2018-07-28T04:19:46Z' },
		{ timestring: '2018-07-28T04:18:59Z' },
		{ timestring: '2018-07-28T04:14:41Z' },
		{ timestring: '2018-07-28T03:54:01Z' },
		{ timestring: '2018-07-28T03:53:10Z' },
		{ timestring: '2018-07-28T02:28:02Z' },
		{ timestring: '2018-07-28T17:41:43Z' },
		{ timestring: '2018-07-28T04:42:10Z' },
		{ timestring: '2018-07-28T04:40:23Z' },
		{ timestring: '2018-07-28T04:40:10Z' },
		{ timestring: '2018-07-28T01:31:38Z' },
		{ timestring: '2018-07-28T00:23:02Z' },
		{ timestring: '2018-07-28T18:17:10Z' },
		{ timestring: '2018-07-28T18:08:21Z' },
		{ timestring: '2018-07-28T15:29:46Z' },
		{ timestring: '2018-07-28T15:15:33Z' },
		{ timestring: '2018-07-28T04:54:39Z' },
		{ timestring: '2018-07-28T04:27:48Z' },
		{ timestring: '2018-07-28T04:24:37Z' },
		{ timestring: '2018-07-28T04:08:45Z' },
		{ timestring: '2018-07-28T03:53:50Z' },
		{ timestring: '2018-07-28T03:42:23Z' },
		{ timestring: '2018-07-28T19:03:27Z' },
		{ timestring: '2018-07-28T00:32:39Z' },
		{ timestring: '2018-07-28T00:32:32Z' },
		{ timestring: '2018-07-28T02:57:20Z' },
		{ timestring: '2018-07-28T02:54:40Z' },
		{ timestring: '2018-07-28T04:28:23Z' },
		{ timestring: '2018-07-28T02:19:41Z' },
		{ timestring: '2018-07-28T00:50:51Z' },
		{ timestring: '2018-07-28T00:40:52Z' },
		{ timestring: '2018-07-28T21:54:06Z' },
		{ timestring: '2018-07-28T21:53:09Z' },
		{ timestring: '2018-07-28T19:09:30Z' },
		{ timestring: '2018-07-28T18:55:04Z' },
		{ timestring: '2018-07-28T18:51:44Z' },
		{ timestring: '2018-07-28T17:24:28Z' },
		{ timestring: '2018-07-28T02:31:18Z' },
		{ timestring: '2018-07-28T04:20:20Z' },
		{ timestring: '2018-07-28T04:19:13Z' },
		{ timestring: '2018-07-28T04:16:31Z' }
	] as { timestring: string; seconds?: any; days?: any }[];

	const xKey = 'seconds';
	const yKey = 'days';

	const r = 4;
	const padding = 2;

	const daysTransformed = data.map((d) => {
		const parts = d.timestring.split('T');
		const time = parts[1]
			.replace('Z', '')
			.split(':')
			.map((q) => +q);
		d[xKey] = time[0] * 60 * 60 + time[1] * 60 + time[2];
		d[yKey] = parts[0];
		return d;
	});

	/* --------------------------------------------
	 * Generate a range of days in between the min and max
	 * in case we are missing any in our data so we can show empty days for them
	 */
	const extents = calcExtents(daysTransformed, {
		x: (d: any) => d.timestring
	});

	if (extents.x == undefined) throw new Error('Sum ting wong');

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

<div class="">
	<LayerCake
		padding={{ top: 0, right: 15, bottom: 20, left: 75 }}
		x={xKey}
		y={yKey}
		xDomain={[0, 24 * 60 * 60]}
		yDomain={allDays}
		xScale={scaleTime()}
		yScale={scaleBand().paddingInner(0.05).round(true)}
		xPadding={[padding, padding]}
		data={daysTransformed}
	>
		<Html>
			<AxisX
				ticks={[0, 4, 8, 12, 16, 20, 24].map((d) => d * 60 * 60)}
				formatTick={(d) => `${Math.floor(d / 60 / 60)}:00`}
			/>
			<AxisY />
			<Scatter {r} fill={'rgba(255, 204, 0, 0.75)'} />
		</Html>
	</LayerCake>
</div>
