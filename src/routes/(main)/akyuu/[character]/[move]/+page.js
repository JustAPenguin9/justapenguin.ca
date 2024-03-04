import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params, url, fetch }) {
	let response;
	if (url.searchParams.has("all"))
		response = await fetch(`/api/akyuu/${params.character}/${params.move}?all`);
	else response = await fetch(`/api/akyuu/${params.character}/${params.move}`);

	// forward response
	if (response.status != 200) error(response.status);

	/** @type {Database.Move[]} */
	let moves = await response.json();
	if (moves.length === 0) {
		error(404, "No moves found");
	}
	let move = moves;

	return { move };
}
