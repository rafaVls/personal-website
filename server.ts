/* eslint-disable @typescript-eslint/no-var-requires */
import express from "express";
const GhostContentAPI = require("@tryghost/content-api");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
dotenv.config({ path: "./.env.local" });

const api = new GhostContentAPI({
	url: process.env.GHOST_HOST,
	key: process.env.GHOST_API_KEY,
	version: "v3"
});

async function getPosts(): Promise<void> {
	interface Post {
		title: string;
	}

	try {
		const posts = await api.posts.browse({
			filter: "tag:getting-started"
		});
		posts.forEach((post: Post) => {
			console.log(post.title);
		});
	} catch (err) {
		console.log(err.message);
	}
}

app.get("/", (req, res) => {
	res.status(200).send("Hello from server!");
	getPosts();
});

app.listen(port, () =>
	console.log(`App listening on http://localhost:${port}`)
);
