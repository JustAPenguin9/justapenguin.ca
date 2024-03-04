<script>
	/** @type {Database.RecordWithDiscord} */
	export let record;
	let { id, winner, loser, recorded_at, games_played } = record;
	winner.global_name ??= "Deleted user";
	loser.global_name ??= "Deleted user";
	let winnerAvatar = `https://cdn.discordapp.com/avatars/${winner.id}/${winner.avatar}.webp`;
	let loserAvatar = `https://cdn.discordapp.com/avatars/${loser.id}/${loser.avatar}.webp`;
</script>

<div id="wrapper">
	<div id="winner">
		<img src={winnerAvatar} alt="Winners Discord avatar" />
		<div style="padding-left: 1em;">
			<p>{winner.global_name}</p>
			<p>{winner.id}</p>
		</div>
	</div>
	<div id="middle">{new Date(recorded_at).toLocaleString()}</div>
	<div id="loser">
		<div style="padding-right: 1em; text-align: right;">
			<p>{loser.global_name}</p>
			<p>{loser.id}</p>
		</div>
		<img src={loserAvatar} alt="Losers Discord avatar" />
	</div>
</div>

<style>
	#wrapper {
		display: flex;
		border: 1px solid var(--color-primary);
		border-radius: var(--border-radius);
		margin-bottom: 1em;
		padding: 0.5em;
		background-color: var(--color-background-higher);
	}

	#wrapper > * {
		flex: 1 1 0;
	}

	img {
		width: 128px;
		border-radius: var(--border-radius);
	}

	#winner {
		color: var(--green);
		display: flex;
		justify-content: flex-start;
	}

	#middle {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#loser {
		color: var(--red);
		display: flex;
		justify-content: flex-end;
	}
</style>
