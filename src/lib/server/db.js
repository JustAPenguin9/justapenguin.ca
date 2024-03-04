import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";

import { createPool } from "mariadb";

if (!env.DB_PASSWORD) {
	console.log("WARNING: MISSING DATABASE PASSWORD IN ENVIRONMENT");
}

const db = createPool({
	host: env.DB_HOST ?? "127.0.0.1",
	user: "akyuu",
	password: env.DB_PASSWORD,
	database: "akyuu_records",
	acquireTimeout: 3000,
	// deprecated but does exactly what i want
	supportBigNumbers: true,
	bigNumberStrings: true,
	// bigIntAsNumber: true,
});

export default db;

/**
 * @param {string} q SQL query
 * @param {any} values values to replace `?`
 * @returns {Promise<Database.Record[] | Database.Move[]>} list of records
 */
export async function query(q, values = []) {
	let conn;
	let result;
	try {
		conn = await db.getConnection();
		result = await conn.query(q, values);
	} catch (e) {
		if (e.code === "ER_PARSE_ERROR") {
			error(500, e.sqlMessage);
		}
		error(500, "Error connecting to database");
	} finally {
		if (conn) {
			conn.end();
		}
	}
	return result;
}
