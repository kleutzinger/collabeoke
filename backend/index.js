var bodyParser = require('body-parser');
const { Lyricist } = require('@execaman/lyricist');
const lyrics = new Lyricist({
	// Whether to save last successful
	// fetch results. default is false
	saveLastResult: true
});

// Make a request

const express = require('express');
// express app
const app = express();
var cors = require('cors');
app.use(cors());
//query param body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/lyrics', async (req, res) => {
	// Keep it short, around 30
	// characters in length
	try {
		const { artist, song } = req.query;
		const query = `${artist} ${song}`;
		console.log('fetching lyrics for: ', query);

		const attempt = 3;
		const result = await lyrics.fetch(query, attempt);
		console.log(result);
		res.json({
			lyrics: result?.lyrics
		});
	} catch (err) {
		res.json({
			error: err
		});
	}
});

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
