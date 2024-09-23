<script>
	import "../../app.css";
	import Crumbs from "$lib/components/Crumbs.svelte";
	import github from "$lib/images/github.svg";
</script>

<div class="app">
	<header>
		<a id="github" href="https://github.com/JustAPenguin9">
			<img src={github} alt="GitHub" />
		</a>

		<nav id="crumbs">
			<Crumbs></Crumbs>
		</nav>

		<select name="theme-selector" id="theme">
			<option value="system">System</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<a href="/legal">Legal notices</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0 auto;
	}

	header {
		display: flex;
		width: 100%;
		max-width: 100rem;
		margin: 0 auto;
		margin-top: 1rem;
		padding: 0.5rem;
		border: 2px solid var(--color-primary);
		border-radius: var(--border-radius);
		background-color: var(--color-background-lower);
	}

	@media (width <= 100rem) {
		header {
			max-width: 95vw;
		}
	}

	@media (width < 350px) {
		#crumbs {
			display: none;
		}
		header {
			justify-content: space-between;
		}
	}

	footer {
		background-color: var(--color-background-lower);
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		/* maybe the position shouldn't be fixed */
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
	}

	footer a {
		padding: 3rem;
	}

	nav {
		display: flex;
		justify-content: center;
		margin-right: auto;
	}

	main {
		padding-top: 3rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 90rem;
		margin: 0 auto;
		box-sizing: border-box;
		padding-bottom: 20rem; /* i don't like websites that don't let me scroll past the bottom */
	}

	@media (width <= 90rem) {
		main {
			padding-inline: 0.7em;
		}
	}

	#github {
		margin-left: 0.5em;
		display: flex;
		align-items: center;
		min-width: 2em;
		background-color: var(--color-primary);
		border-radius: 3px;
	}
</style>
