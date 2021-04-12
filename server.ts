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

app.get("/posts", async (req, res) => {
	try {
		const posts = await api.posts.browse({
			limit: 5,
			include: "tags"
		});
		res.status(200).json({
			success: true,
			posts
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err.message
		});
	}
});

app.listen(port, () =>
	console.log(`App listening on http://localhost:${port}`)
);
