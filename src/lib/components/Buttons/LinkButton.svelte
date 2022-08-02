<script lang="ts">
    let className: string = ""
    export { className as class }
</script>

<div class="text-sm cursor-pointer {className}" on:click>
    <slot/>
</div>