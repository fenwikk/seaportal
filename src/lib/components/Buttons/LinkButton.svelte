<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="button link-button {className}" on:click>
	<slot />
</div>
