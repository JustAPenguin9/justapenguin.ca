/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const result = await fetch("/api/akyuu/history?discordStuff");
	/** @type {Database.RecordWithDiscord[]} */
	const history = await result.json();
	return { history };
}
