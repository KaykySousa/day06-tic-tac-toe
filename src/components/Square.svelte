<script lang="ts">
	export let symbol: "O" | "X" | undefined = undefined
</script>

<button
	class="bg-neutral-50 rounded-md flex justify-center items-center text-lime-400 text-5xl font-bold"
	on:click
>
	{#if symbol}
		{symbol}
	{/if}
</button>
