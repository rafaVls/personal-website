import { server } from "../config";
import { Post } from "../common/types";

export async function getPosts(): Promise<Post[]> {
	interface Posts {
		posts: Post[];
	}

	const res = await fetch(`${server}/posts`);
	const { posts }: Posts = await res.json();

	return posts;
}

export async function getPost(slug: string | string[]): Promise<Post> {
	const res = await fetch(`${server}/post/${slug}`);
	const { post }: { post: Post } = await res.json();

	return post;
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