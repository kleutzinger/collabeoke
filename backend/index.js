var bodyParser = require('body-parser');
const fs = require('fs');

// Make a request

const express = require('express');
// express app
const app = express();
var cors = require('cors');
app.use(cors());
//query param body parser
app.use(bodyParser.urlencoded({ extended: true }));

const snake_eater = {
	id: 1927094,
	name: 'Snake Eater',
	trackName: 'Snake Eater',
	artistName: 'Cynthia Harrell',
	albumName: 'Metal Gear Solid 3: Snake Eater',
	duration: 178,
	instrumental: false,
	plainLyrics:
		"What a thrill\nWith darkness and silence through the night\nWhat a thrill\nI'm searching and I'll melt into you\nWhat a fear in my heart\nBut you're so supreme!\n\nI give my life\nNot for honor, but for you (snake eater)\nIn my time, there'll be no one else\nCrime, it's the way I fly to you (snake eater)\nI'm still in a dream, snake eater\n\nSomeday you go through the rain\nSomeday you feed on a tree frog\nIt's ordeal, the trial to survive\nFor the day we see new light\n\nI give my life\nNot for honor, but for you (snake eater)\nIn my time, there'll be no one else\nCrime, it's the way I fly to you (snake eater)\nI'm still in a dream, snake eater\n\nI'm still in a dream, snake eater\n(Snake eater)",
	syncedLyrics:
		"[00:11.97] What a thrill\n[00:15.83] With darkness and silence through the night\n[00:22.40] What a thrill\n[00:26.43] I'm searching and I'll melt into you\n[00:33.00] What a fear in my heart\n[00:37.02] But you're so supreme!\n[00:43.23] I give my life\n[00:46.04] Not for honor, but for you (snake eater)\n[00:54.14] In my time, there'll be no one else\n[01:05.41] Crime, it's the way I fly to you (snake eater)\n[01:15.56] I'm still in a dream, snake eater\n[01:26.38] Someday you go through the rain\n[01:31.86] Someday you feed on a tree frog\n[01:36.99] It's ordeal, the trial to survive\n[01:42.27] For the day we see new light\n[01:48.25] I give my life\n[01:51.48] Not for honor, but for you (snake eater)\n[01:59.44] In my time, there'll be no one else\n[02:10.62] Crime, it's the way I fly to you (snake eater)\n[02:20.92] I'm still in a dream, snake eater\n[02:32.30] \n[02:36.38] I'm still in a dream, snake eater\n[02:48.87] (Snake eater)\n[02:52.94] "
};

app.get('/snake-eater-lyrics', async (req, res) => {
	res.json(snake_eater);
});

app.get('/snake-eater.mp3', async (req, res) => {
	const file = fs.createReadStream(__dirname + '/storage/snake-eater.mp3');
	res.setHeader('Content-Type', 'audio/mpeg');
	file.pipe(res);
});

app.get('/lyrics', async (req, res) => {
	// Keep it short, around 30
	// characters in length
	try {
		const { artist, song } = req.query;
		const query = `${artist} ${song}`;
		console.log('fetching lyrics for: ', query);
		const searchEndpoint = `https://lrclib.net/api/search?q=${query}`;

		const result = await (await fetch(searchEndpoint)).json();
		console.log(result);
		res.json(result);
	} catch (err) {
		res.json({
			error: err
		});
	}
});

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
