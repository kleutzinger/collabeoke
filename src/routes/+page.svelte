<script>
	import Counter from './Counter.svelte';
	import Lyricgetter from './Lyricgetter.svelte';
	import Recorder from './Recorder.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<script src="https://unpkg.com/rabbit-lyrics" type="text/javascript"></script>
</svelte:head>

<section>
	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<audio id="audio-1" src="http://0.0.0.0:3000/snake-eater.mp3" controls> </audio>
	<!-- prettier-ignore -->
	<div class="rabbit-lyrics" data-media="#audio-1">
[00:11.97] What a thrill
[00:15.83] With darkness and silence through the night
[00:22.40] What a thrill
[00:26.43] I'm searching and I'll melt into you
[00:33.00] What a fear in my heart
[00:37.02] But you're so supreme!
[00:43.23] I give my life
[00:46.04] Not for honor, but for you (snake eater)
[00:54.14] In my time, there'll be no one else
[01:05.41] Crime, it's the way I fly to you (snake eater)
[01:15.56] I'm still in a dream, snake eater
[01:26.38] Someday you go through the rain
[01:31.86] Someday you feed on a tree frog
[01:36.99] It's ordeal, the trial to survive
[01:42.27] For the day we see new light
[01:48.25] I give my life
[01:51.48] Not for honor, but for you (snake eater)
[01:59.44] In my time, there'll be no one else
[02:10.62] Crime, it's the way I fly to you (snake eater)
[02:20.92] I'm still in a dream, snake eater
[02:32.30]
[02:36.38] I'm still in a dream, snake eater
[02:48.87] (Snake eater)
[02:52.94]
	</div>
	<Recorder />
	<Lyricgetter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
