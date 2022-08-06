<script>
	import Box from '$lib/components/Box';
	import { CircularPercentage, LineOverTime } from '../components/Charts';

	import PageTitle from '../components/PageTitle';

	const now = new Date();
	const greeting = now.getHours() > 4 && now.getHours() < 10 ? 'Good morning!' : 'Hello!';
</script>

<PageTitle title={greeting} />

<div class="container py-6">
	<div class="flex justify-between items-end mb-4">
		<h2 class="text-3xl">Analytics</h2>
		<div class="text-gray-500 hover:text-black cursor-pointer duration-100">See More</div>
	</div>

	<div class="flex flex-col gap-4">
		<div class="flex gap-4">
			<Box class="flex flex-col items-center w-72">
				<span class="text-lg mb-8">Real Experience Score</span>
				<CircularPercentage value={44} width={"128px"} />
				<span class="px-3 py-1 border rounded-full mt-8">7 Data Points</span>
			</Box>
			<Box class="flex-grow">
				<Line />
			</Box>
		</div>
	</div>
</div>