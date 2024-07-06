import { Lyricist } from '@execaman/lyricist';
const lyrics = new Lyricist({
	// Whether to save last successful
	// fetch results. default is false
	saveLastResult: true
});

// Keep it short, around 30
// characters in length
const query = 'luca brand new';

// Number of attempts to make
// if Google doesn't have the lyric
const attempt = 3;

// Make a request
const result = await lyrics.fetch(query, attempt);
console.log(result);
