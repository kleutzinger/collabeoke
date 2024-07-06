<!-- make a form with an input and a submit function that calls a backend funciton and puts text on the screen-->
<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let lyrics = writable('');
	let artist = '';
	let song = '';

	const getLyrics = async () => {
		const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
		const data = await res.json();
		lyrics.set(data.lyrics);
	};

	onMount(() => {
		getLyrics();
	});
</script>

<form on:submit|preventDefault={getLyrics}>
	<label>
		Artist:
		<input type="text" bind:value={artist} />
	</label>

	<label>
		Song:
		<input type="text" bind:value={song} />
	</label>

	<button type="submit">Get lyrics</button>
</form>

<pre>{JSON.stringify($lyrics, null, 2)}</pre>

<style>
	form {
		display: flex;
		flex-direction: column;
	}

	label {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	input {
		padding: 0.5rem;
		font-size: 1rem;
	}

	button {
		padding: 0.5rem;
		font-size: 1rem;
	}
</style>
