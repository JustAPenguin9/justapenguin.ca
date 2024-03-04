import { query } from "$lib/server/db";
import { getCharacter } from "$lib/server/getCharacter";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, url }) {
	// sanitizes character param
	const character = getCharacter(params.character);

	if (character == null)
		return new Response("Unknown character: " + params.character, { status: 404 });

	let q = "SELECT * FROM `moves` WHERE `character` = ?";
	console.log('requested: "' + q + '" [' + character + "]");
	const result = await query(q, [character]);
	console.log("got back result with length " + result.length);

	return new Response(JSON.stringify(result), {
		headers: {
			"content-type": "application/json",
		},
	});
}
