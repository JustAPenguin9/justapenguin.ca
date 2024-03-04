import { query } from "$lib/server/db";
import * as cache from "$lib/server/cache";
import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const limit = url.searchParams.get("limit");
	const winner = url.searchParams.get("winner");
	const loser = url.searchParams.get("loser");
	const player = url.searchParams.get("player");
	// const id = url.searchParams.get('id');

	// check if params contain only numbers if they exist
	if ((winner && !Number(winner)) || (loser && !Number(loser)) || (player && !Number(player)))
		return error(400, "Only numbers are allowed as arguments");

	// if ((winner || loser) && (player || id))
	if ((winner || loser) && player)
		return error(400, '"player" parameter can only be used when "winner" and "loser" are not used');

	let conditions = "";
	if (player) {
		conditions = conditions.concat(" where `winner` = ", player, " or `loser` = ", player);
	} else {
		const params = { winner, loser };
		let includedWhere = false;
		for (const k in params) {
			if (!includedWhere && params[k] !== null) {
				conditions = conditions.concat(" where `", k, "` = ", params[k]);
				includedWhere = true;
			} else if (includedWhere && params[k] !== null) {
				conditions = conditions.concat(" and `", k, "` = ", params[k]);
			}
		}
	}

	let q = "".concat(
		"select * from `history` ",
		conditions,
		" order by `id` desc limit ",
		(Number(limit) || 10).toString(),
	);

	if (url.searchParams.get("offset")) {
		q += " offset " + (Number(url.searchParams.get("offset")) || 0);
	}
	/** @type {Database.Record[]} */
	const result = await query(q);

	if (url.searchParams.has("discordStuff")) {
		const requests = [];
		const users = [];
		result.forEach((record) => {
			if (!users.includes(record.winner)) {
				const request = cache.fetchJson("https://discordapp.com/api/v9/users/" + record.winner, {
					Authorization: "Bot " + env.DISCORD_TOKEN,
				});
				requests.push(request);
				users.push(record.winner);
			}
			if (!users.includes(record.loser)) {
				const request = cache.fetchJson("https://discordapp.com/api/v9/users/" + record.loser, {
					Authorization: "Bot " + env.DISCORD_TOKEN,
				});
				requests.push(request);
				users.push(record.loser);
			}
		});

		const data = await Promise.all(requests);

		result.forEach((record) => {
			record.winner = data.find((obj) => obj.id === record.winner);
			record.loser = data.find((obj) => obj.id === record.loser);
		});
	}

	return new Response(JSON.stringify(result), {
		headers: {
			"cache-control": "public, max-age=300",
			"content-type": "application/json",
		},
	});
}
