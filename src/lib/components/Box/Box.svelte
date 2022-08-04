<script lang="ts">
	let className: string = '';

	export { className as class };
</script>

<div class="p-6 bg-white rounded-md shadow-lg {className}">
	<slot />
</div>
