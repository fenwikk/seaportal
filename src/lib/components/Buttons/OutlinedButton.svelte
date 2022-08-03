<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="button outlined-button {className}" on:click>
	<slot />
</div>
