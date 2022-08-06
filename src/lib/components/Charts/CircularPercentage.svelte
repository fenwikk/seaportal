<script lang="ts">
    export let value: number

    export let width: string | number = "100%"
    export let height: string | number = width

    export let fontSize: string = "36px"
</script>

<div class="relative flex justify-center items-center" style="width: {width}; height: {height};">
    <svg fill="none" viewBox="0 0 120 120" class="absolute" {width} {height}>
        <circle
            class="stroke-gray-100"

            cx="60"
            cy="60"
            r="53"

            stroke-dashoffset="0"
            stroke-width="12"
        />
        <circle
            class="stroke-green-500"

            cx="60"
            cy="60"
            r="53"

            stroke-dasharray="{value * 3.40} 340"
            stroke-dashoffset="0"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"

            transform="rotate(-90 60 60)"
        />
    </svg>
    <div class="font-bold" style="font-size: {fontSize};">{value}</div>
</div>