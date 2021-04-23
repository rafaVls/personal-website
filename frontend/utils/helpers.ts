import { Post, Tag } from "../common/types";

export async function getPosts(): Promise<Post[]> {
	interface Posts {
		posts: Post[];
	}

	const res = await fetch(`${process.env.SERVER}/posts`);
	const { posts }: Posts = await res.json();

	return posts;
}

export async function getPost(slug: string | string[]): Promise<Post> {
	const res = await fetch(`${process.env.SERVER}/post/${slug}`);
	const { post }: { post: Post } = await res.json();

	return post;
}

export async function getTags(): Promise<Tag[]> {
	interface Tags {
		tags: Tag[];
	}

	const res = await fetch(`${process.env.SERVER}/tags`);
	const { tags }: Tags = await res.json();

	return tags;
}

export function capitalize(toCapitalize: string): string {
	const wordArray = toCapitalize.split(" ");
	const capitalizedArray = wordArray.map(
		word => word.charAt(0).toUpperCase() + word.slice(1)
	);

	return capitalizedArray.join(" ");
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
