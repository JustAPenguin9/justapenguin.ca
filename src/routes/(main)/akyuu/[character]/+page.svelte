<script>
	import Move from "$lib/components/Move.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.move}
	{#each data.move as move}
		{#each move.data.variations as variation}
			<Move move={variation}></Move>
		{/each}
	{/each}
{:else}
	<h1>No moves found</h1>
	<a href="/akyuu">go back</a>
{/if}
