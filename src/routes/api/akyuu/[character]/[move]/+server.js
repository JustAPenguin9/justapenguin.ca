import { query } from "$lib/server/db";
import { getCharacter } from "$lib/server/getCharacter";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, url }) {
	// sanitizes character param
	const character = getCharacter(params.character);

	if (character == null)
		return new Response("Unknown character: " + params.character, { status: 404 });

	if (params.move.match(/^[a-z0-9\.]/)?.toString() == params.move)
		return new Response("Invalid move: " + params.move, { status: 400 });

	// if all is not set just get the most recent match
	let q =
		"SELECT * FROM `moves` WHERE `character` = ? AND FIND_IN_SET(?, `labels`) > 0 ORDER BY `id` DESC";
	if (!url.searchParams.has("all")) {
		q += " LIMIT 1";
	}
	console.log('requested: "' + q + '" [' + character + ", " + params.move + "]");
	const result = await query(q, [character, params.move]);
	console.log("got back result with length " + result.length);

	return new Response(JSON.stringify(result), {
		headers: {
			"content-type": "application/json",
		},
	});
}
