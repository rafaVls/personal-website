/* eslint-disable @typescript-eslint/no-var-requires */
const GhostContentAPI = require("@tryghost/content-api");
const sanitizeHtml = require("sanitize-html");
import { Post, Tag } from "./types/ghost";
import { formatDate } from "./utils/helpers";
import express from "express";
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
		const posts: Post[] = await api.posts.browse({
			include: "tags,authors"
		});

		posts.forEach(post => {
			post.published_at = formatDate(post.published_at);
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
			const post: Post = await api.posts.read({
				slug,
				include: "tags,authors",
				formats: ["html"]
			});

			post.published_at = formatDate(post.published_at);
			post.html = sanitizeHtml(post.html, {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
				allowedAttributes: {
					a: ["href", "name", "target"],
					figure: ["class"],
					div: ["class"],
					img: ["src", "alt"],
					code: ["class"]
				}
			});

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

app.get("/tags", async (req, res) => {
	try {
		const tags: Tag[] = await api.tags.browse();
		const posts: Post[] = await api.posts.browse({ include: "tags" });

		tags.forEach(tag => {
			tag.posts = posts.filter(post => {
				for (const postTag of post.tags) {
					if (postTag.id === tag.id) {
						return true;
					}
				}
			});
		});

		res.status(200).json({
			success: true,
			tags
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
