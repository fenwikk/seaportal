<script lang="ts">
	export let title: string;
	export let subTitle: string = '';
</script>

<div class="bg-gray-50 border-b">
	<div class="container py-10">
		<h1 class="text-3xl font-serif">{@html title}</h1>
		<p>{@html subTitle}</p>
	</div>
</div>
