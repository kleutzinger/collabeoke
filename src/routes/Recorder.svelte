<!-- make a recording button to record michrophone input. save the recording to an <audio> element for playback afterward -->

<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let recording = false;
	let audioChunks = [];
	let mediaRecorder;
	let audioURL = writable('');

	const startRecording = () => {
		navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
			audioChunks = [];
			mediaRecorder = new MediaRecorder(stream);
			mediaRecorder.ondataavailable = (e) => {
				audioChunks.push(e.data);
			};
			mediaRecorder.onstop = () => {
				const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
				const audioBlobURL = URL.createObjectURL(audioBlob);
				audioURL.set(audioBlobURL);
			};
			mediaRecorder.start();
			recording = true;
		});
	};

	const stopRecording = () => {
		mediaRecorder.stop();
		recording = false;
	};

	onMount(() => {
	});
</script>

<button on:click={startRecording} disabled={recording}>Start recording</button>
<button on:click={stopRecording} disabled={!recording}>Stop recording</button>

<audio src={$audioURL} controls></audio>

<style>
	button {
		padding: 0.5rem;
		font-size: 1rem;
		margin-bottom: 1rem;
	}
</style>
