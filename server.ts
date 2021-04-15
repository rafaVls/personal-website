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

app.get("/post/:slug", async (req, res) => {
	const slugFormat = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
	const slug = req.params.slug;

	if (slugFormat.test(slug)) {
		try {
			const post = await api.posts.read({ slug }, { formats: ["html"] });
			res.status(200).json({
				success: true,
				post
			});
		} catch (err) {
			res.status(500).json({
				success: false,
				message: err.message
			});
		}
	} else {
		res.status(500).json({
			success: false,
			message: "Validation (slugFormat) failed for slug."
		});
	}
});

app.listen(port, () =>
	console.log(`App listening on http://localhost:${port}`)
);
