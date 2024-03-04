<script>
	import { page } from "$app/stores";
	import { afterNavigate } from "$app/navigation";

	/** @type {string[]} */
	let paths = ["pre navigate & not set"];
	afterNavigate(() => {
		paths = $page.url.pathname != "/" ? $page.url.pathname.split("/") : [];
		paths[0] = "home";
	});
</script>

<ul>
	<span class="wrapper">
		{#each paths as path, i}
			<span class="slash">/</span>
			<!-- preload data false because i don't want to query the database every time someone hovers over "reimu" -->
			<a data-sveltekit-preload-data="false" href="/{paths.slice(1, i + 1).join('/')}">{path}</a>
		{/each}
	</span>
</ul>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.slash {
		display: inline-block;
		padding-inline: 0.5em;
		font-size: 2em;
		margin-top: -0.1em;
		color: var(--color-primary);
	}

	a,
	a:visited {
		color: var(--color-text);
		text-decoration: none;
	}

	.wrapper {
		display: flex;
		align-items: center;
	}
</style>
