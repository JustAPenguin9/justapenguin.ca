<script>
	let character = "reimu";
	let move = "5a";
</script>

<ul>
	<li><a href="/akyuu/history">player history</a></li>
</ul>
<div id="move-selector">
	<p>query a character move</p>
	<select id="character" bind:value={character}>
		<option value="reimu">Reimu Hakurei</option>
		<option value="marisa">Marisa Kirisame</option>
		<option value="ichirin">Ichirin Kumoi</option>
		<option value="byakuren">Byakuren Hijiri</option>
		<option value="futo">Mononobe no Futo</option>
		<option value="miko">Toyosatomimi no Miko</option>
		<option value="nitori">Nitori Kawashiro</option>
		<option value="koishi">Koishi Komeji</option>
		<option value="mamizou">Mamizou Futatsuiwa</option>
		<option value="kokoro">Hata no Kokoro</option>
		<option value="kasen">Kasen Ibaraki</option>
		<option value="mokou">Fujiwara no Mokou</option>
		<option value="sukuna">Shinmyoumaru Sukuna</option>
		<option value="sumireko">Sumireko Usami</option>
		<option value="reisen">Reisen Udongein Inaba</option>
		<option value="doremy">Doremy Sweet</option>
		<option value="tenshi">Tenshi Hinanawi</option>
		<option value="yukari">Yukari Yakumo</option>
		<option value="joon">Joon Yorigami</option>
	</select>
	<input type="text" bind:value={move} />
	<button on:click={() => (window.location.href = `/akyuu/${character}/${move}`)}
		>search most recent</button
	>
	<button on:click={() => (window.location.href = `/akyuu/${character}/${move}?all`)}
		>search all</button
	>
</div>

<style>
	button,
	input,
	select {
		padding: 3px;
		margin: 1px;
	}
	#move-selector {
		margin-top: 1rem;
	}
</style>
