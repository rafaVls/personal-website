import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "../common/types";
import { getPosts } from "../utils/helpers";
import { PostCard, BlogHeader } from "../components/index";
import styles from "../styles/Blog.module.css";

interface Props {
	posts: Post[];
}

export default function Blog({ posts }: Props): JSX.Element {
	const postCards = posts.map((post, index) => (
		<li key={index}>
			<PostCard post={post} />
		</li>
	));

	return (
		<>
			<BlogHeader />

			<Link href="/tags">
				<a className={styles.browseTags}>Browse by tags</a>
			</Link>
			<ul className={styles.postCards}>{postCards}</ul>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts: Post[] = await getPosts();

	return {
		props: { posts }
	};
};
