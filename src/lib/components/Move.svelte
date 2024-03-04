<script>
	/** @type {Database.MoveData}*/
	export let move;
</script>

<!-- TODO: make pretty -->

<div id="move">
	<div>
		<p style="max-wdith: 15em; text-align: center;">{move.title}</p>
	</div>
	<div id="wrapper">
		{#if move.attachment}
			<img src={move.attachment} alt="{move.title} image" />
		{:else}
			<span style="width: 300px"></span>
		{/if}
		<div>
			<ul>
				<li>startup: {move.startup ?? "?"}</li>
				<li>active: {move.active ?? "?"}</li>
				<li>recovery: {move.recovery ?? "?"}</li>
				<li>damage: {move.damage ?? "?"}</li>
				<li>stun: {move.stun ?? "?"}</li>
			</ul>
		</div>
	</div>
</div>

<style>
	#move {
		border: 1px solid var(--color-primary);
		border-radius: var(--border-radius);
		margin-bottom: 1em;
		padding: 0.5em;
		background-color: var(--color-background-higher);
		max-width: 600px;
	}

	#wrapper {
		display: flex;
	}

	@media (max-width: 600px) {
		#wrapper {
			display: inline-block;
		}
	}

	img {
		width: 300px;
	}

	ul {
		margin-left: 20px;
	}
</style>
