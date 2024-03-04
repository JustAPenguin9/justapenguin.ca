/**
 *  @typedef {Object} value
 *  @property {*} data
 *  @property {number} expiry
 */

/** @type {Map<any, value>} */
const cache = new Map();

/**
 * @param {*} key key to query
 * @returns {*} value in the cache, undefined if none
 */
function get(key) {
	const value = cache.get(key);
	if (value?.expiry < Date.now()) {
		cache.delete(key);
	} else {
		return value?.data;
	}
}

/**
 * returns the response data if it is already cached otherwise
 * fetches from the url, adds to adds the response data to the
 * cache, and returns the response data
 * @param {URL | string} url url to query
 * @param {HeadersInit | undefined} headers additional headers
 * @returns {Promise<Response>} response
 */
async function fetchJson(url, headers = undefined) {
	const value = get(url);
	if (value) {
		return value;
	} else {
		const result = await fetch(url, { headers });
		const json = await result.json();
		set(url, json);
		return json;
	}
}

/**
 * @param {any} key cache key
 * @param {any} value cache value
 * @param {number} expiry how long the cache is valid, default is 15 minutes
 */
function set(key, value, expiry = 15 * 60_000) {
	cache.set(key, { data: value, expiry: Date.now() + expiry });
}

/**
 * flush expired values from the cache
 */
function flush() {
	const now = Date.now();
	for (const [k, v] of cache) {
		if (v.expiry < now) {
			cache.delete(k);
		}
	}
}

// flush expired values once an hour
setInterval(flush, 60_000 * 60);

export { get, fetchJson, set, flush };
