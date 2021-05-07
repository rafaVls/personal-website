import { GhostAPI, PostOrPage, PostsOrPages } from "@tryghost/content-api";
import { TagWithPosts } from "../common/types";
import sanitizeHtml from "sanitize-html";

export async function getPosts(api: GhostAPI): Promise<PostsOrPages> {
	const posts = await api.posts.browse({
		include: ["tags", "authors"]
	});

	posts.forEach(post => {
		post.published_at = formatDate(post.published_at);
	});

	return posts;
}

export async function getPost(
	slug: string,
	api: GhostAPI
): Promise<PostOrPage> {
	const post = await api.posts.read(
		{
			slug
		},
		{ include: ["tags", "authors"], formats: "html" }
	);

	// post.published_at = formatDate(post.published_at);
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

	return post;
}

export async function getTags(api: GhostAPI): Promise<TagWithPosts[]> {
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
	return tags;
}

export function capitalize(toCapitalize: string): string {
	const wordArray = toCapitalize.split(" ");
	const capitalizedArray = wordArray.map(
		word => word.charAt(0).toUpperCase() + word.slice(1)
	);

	return capitalizedArray.join(" ");
}

export function formatDate(publishDate: string): string {
	return new Date(publishDate).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}

export const debounce = (fn: (...params: never[]) => void): (() => void) => {
	let frame: number;
	return (...params: never[]) => {
		if (frame) {
			cancelAnimationFrame(frame);
		}

		frame = requestAnimationFrame(() => {
			fn(...params);
		});
	};
};

export const storeScroll = (): void => {
	document.documentElement.dataset.scroll = window.scrollY.toString();
};
