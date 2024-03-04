import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	let response = await fetch(`/api/akyuu/${params.character}`);

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
