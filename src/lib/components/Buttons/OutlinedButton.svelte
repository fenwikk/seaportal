<script lang="ts">
    let className: string = ""
    export { className as class }
</script>

<div class="py-1 px-2 border rounded-md text-sm cursor-pointer {className}" on:click>
    <slot/>
</div>