<script>
	import Match from "$lib/components/Match.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.history.length > 0}
	{#each data.history as record}
		<Match {record}></Match>
	{/each}
{:else}
	<h1>There are no records to show</h1>
{/if}

pagination eventually
