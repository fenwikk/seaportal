<script lang="ts">
	export let title: string;
	export let subTitle: string = '';
</script>

<div class="border-b">
	<div class="container py-14">
		<h1 class="text-4xl">{@html title}</h1>
		<p>{@html subTitle}</p>
	</div>
</div>
