import { Router } from "express";
import dotenv from "dotenv";
import path from "path";

import GhostContentAPI from "@tryghost/content-api";
import { TagWithPosts } from "../types/ghost";
import { formatDate } from "../utils/helpers";
import sanitizeHtml from "sanitize-html";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const router = Router();
const api = new GhostContentAPI({
	url: process.env.GHOST_HOST,
	key: process.env.GHOST_API_KEY,
	version: "v3"
});

router.get("/posts", async (req, res) => {
	try {
		const posts = await api.posts.browse({
			include: ["tags", "authors"]
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

router.get("/post/:slug", async (req, res) => {
	const slugFormat = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
	const slug = req.params.slug;

	if (slugFormat.test(slug)) {
		try {
			const post = await api.posts.read(
				{
					slug
				},
				{ include: ["tags", "authors"], formats: "html" }
			);

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

router.get("/tags", async (req, res) => {
	try {
		const tags: TagWithPosts[] = await api.tags.browse();
		const posts = await api.posts.browse({ include: "tags" });

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

export default router;
